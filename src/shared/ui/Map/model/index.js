import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import {
  iconsPresets,
  classNames as defaultClassNames,
  yandexMapCustomEventNames,
  iconShapeCfg as defaultIconShapeCfg,
} from "../config/constants.js";
import { checkMapInstance } from "../config/lib/checkMapInstance.js";
// eslint-disable-next-line no-restricted-imports
import { DeleteMarkBtn } from "#features/Marks/DeleteMark/index.js";
// eslint-disable-next-line no-restricted-imports
import { UpdateMarkBtn } from "#features/Marks/UpdateMark/ui/Updatemark.js";
import { getExternalScript } from "#shared/lib/utils/getExtetnalScript";

/**
 *
 */
export class YandexMap {
  constructor({
    containerSelector,
    apiKey,
    center = [45.751574, 37.573856],
    zoom = 10,
    lang = "ru_RU",
    apiUrl = "https://api-maps.yandex.ru/2.1/?apikey",
    classNames,
    iconShapeCfg,
  }) {
    this.containerSelector = containerSelector;
    this.containerMap = document.querySelector(this.containerSelector);
    this.apiKey = apiKey;
    this.center = center;
    this.zoom = zoom;
    this.lang = lang;
    this.apiUrl = apiUrl;
    this.instance = null;
    this.centerMarker = null; //Центральная иконка на карте
    this.iconsPresets = iconsPresets;
    this.classNames = classNames ?? defaultClassNames;
    this.iconShapeCfg = iconShapeCfg ?? defaultIconShapeCfg;
    this.attrs = {
      ballon: "data-js-ballon",
    };
  }

  getBallonLayout() {
    if (window.ymaps) {
      const ballonLayout = window.ymaps.templateLayoutFactory.createClass(
        `<div class="${this.classNames.ballonLayout}">$[[options.contentLayout observeSize]]</div>`,
        {
          build: function () {
            ballonLayout.superclass.build.call(this);
          },
          clear: function () {
            ballonLayout.superclass.clear.call(this);
          },
        }
      );
      return ballonLayout;
    }
    throw new Error("ymaps not ready");
  }

  getBallonContent({ id, children }) {
    const linkToCreateSwiperFn = this.createSwiperForBallon;
    if (window.ymaps) {
      const ballonContent = window.ymaps.templateLayoutFactory.createClass(
        `<div class="${this.classNames.ballonContent}" ${this.attrs.ballon}=${id}> 
            ${children}
        </div>`,
        {
          build: function () {
            ballonContent.superclass.build.call(this);
            linkToCreateSwiperFn(id);
          },
          clear: function () {
            ballonContent.superclass.clear.call(this);
          },
        }
      );
      return ballonContent;
    }
    throw new Error("ymaps not ready");
  }

  createSwiperForBallon(ballonId) {
    try {
      const ballonContainer = document.querySelector(
        `[data-js-ballon="${ballonId}"]`
      );

      const swiperEl = ballonContainer.querySelector(".swiper");
      const swiperPagination =
        ballonContainer.querySelector(".swiper-pagination");

      if (swiperEl && swiperPagination) {
        new Swiper(swiperEl, {
          slidesPerView: 1,
          direction: "horizontal",
          modules: [Pagination],
          pagination: {
            el: swiperPagination,
            clickable: true,
          },
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  getMarkerLayout(typeMarker) {
    if (window.ymaps) {
      const customLayout = window.ymaps.templateLayoutFactory.createClass(
        `<div class="${this.classNames.mark}">
         ${this.iconsPresets[typeMarker] ? this.iconsPresets[typeMarker] : typeMarker}
       </div>`
      );

      return customLayout;
    }
    throw new Error("ymaps not ready");
  }

  #createMap() {
    this.instance = new window.ymaps.Map(
      this.containerMap,
      {
        center: this.center,
        zoom: this.zoom,
        type: "yandex#map",
        controls: [],
      },
      {
        suppressMapOpenBlock: true, // Скрыть кнопку открытия карты на Яндексе
      }
    );
    this.addCenterMarker();
    this.#bindEvents();
    return this.instance;
  }

  async initMap() {
    try {
      if (window.ymaps) {
        return this.#createMap();
      }
      //Ждём когда подгрузится внешний скрипт для Yandex API
      await getExternalScript(
        `${this.apiUrl}=${this.apiKey}&lang=${this.lang}`
      );
      //Ждём когда будет готова карта (ожидаем ymaps -> карту)
      await new Promise((resolve, reject) => {
        window.ymaps.ready(() => {
          try {
            resolve(this.#createMap());
          } catch (e) {
            reject(e);
          }
        });
      });
      // Возвращаем карту, если успешно инициализирована
      return this.instance;
    } catch (error) {
      console.error("Ошибка при загрузке API Яндекс.Карт:", error);
    }
  }

  isExistMapInstance() {
    if (!this.instance) {
      console.warn("Карта не инициализирована");
      return false;
    }
    return true;
  }

  @checkMapInstance
  addMark({ id, cords, type: typeMarker, onClick } = {}) {
    const placemark = new window.ymaps.Placemark(
      cords,
      { id },
      {
        balloonLayout: this.getBallonLayout(),
        balloonContentLayout: this.getBallonContent({
          id,
          children: "Загрузка...",
        }),
        hasBalloon: true,
        iconLayout: this.getMarkerLayout(typeMarker),
        iconShape: this.iconShapeCfg,
        hideIconOnBalloonOpen: false,
      }
    );

    placemark.events.add("click", (event) => {
      if (this.instance.balloon.isOpen()) {
        return;
      }
      if (onClick && typeof onClick === "function") onClick(id, event);
    });

    this.instance.geoObjects.add(placemark);
  }

  @checkMapInstance
  addCenterMarker() {
    try {
      const centerMarker = document.createElement("div");
      centerMarker.className = this.classNames["centerMarker"];
      centerMarker.innerHTML = this.iconsPresets["centerMarker"];
      this.containerMap.appendChild(centerMarker);
      this.centerMarker = centerMarker;
    } catch (e) {
      console.error("Ошибка при добавлении центральной метки:", e);
    }
  }

  handleMarkerClick(id, e) {
    const targetPlacemark = e.get("target");

    const customEvent = new CustomEvent(yandexMapCustomEventNames.markClicked, {
      detail: {
        id,
        mark: targetPlacemark,
      },
    });

    this.containerMap.dispatchEvent(customEvent);
  }

  updateBallonContent(id, mark, info) {
    mark.options.set(
      "balloonContentLayout",
      this.getBallonContent({
        id,
        children: `${info}`,
      })
    );
  }

  getLayoutContentForBallon(id, info) {
    const {
      type,
      title,
      address: { house, street },
    } = info;
    const slides = info.images
      .map(
        (image, index) =>
          `<div class="swiper-slide"><img src="${image}" alt="${info.title} - Slide ${index + 1}"></div>`
      )
      .join("");

    function getNameType(type) {
      let names = {
        bars: "Бар",
        restaurant: "Ресторан",
        club: "Клуб",
        theatre: "Театр",
        cinema: "Кино",
      };

      return names[type];
    }
    return `<div class="container-ballon">
              <div class="swiper">
                <div class="swiper-wrapper">
                 ${slides}
                </div>
               <div class="swiper-pagination"></div>
              </div>
              <div class="swiper__description">
               <h3 class="description_title">${title}</h3>
               <div class="description_type">${this.iconsPresets[type]}${getNameType(type)}</div>
               <p class="description_address">${street}, ${house}</p>
              <div class="swiper__control">
                <div class="swiper__delete">
                  ${DeleteMarkBtn({ markId: id })}
                </div>
                <div class="swiper__update">
                  ${UpdateMarkBtn({ markInfo: info })}
                </div>
              </div>
            </div>
            `;
  }

  @checkMapInstance
  renderMarks(marks) {
    this.clearMap(); //очистка перед рендером
    marks.forEach((mark) => {
      this.addMark({
        id: mark.id,
        cords: mark.cords,
        type: mark.type,
        onClick: (id, e) => {
          this.handleMarkerClick(id, e);
        },
      });
    });
  }

  @checkMapInstance
  clearMap() {
    this.instance.geoObjects.removeAll();
  }

  @checkMapInstance
  centerMapByCords(cords, zoom = 15) {
    try {
      this.instance.setCenter(cords, zoom);
    } catch (e) {
      console.error(e);
    }
  }

  #bindEvents() {
    this.instance.events.add("click", (e) => {
      this.instance.balloon.close();
    });
  }
}
