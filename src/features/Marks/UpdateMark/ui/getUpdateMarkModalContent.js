import { Button } from "#shared/ui/Button";
import { CustomSelect } from "#shared/ui/CustomSelect/index";
import {
  CinemaIcon,
  RestIcon,
  MusicIcon,
  TheatreIcon,
  BarIcon,
} from "#shared/ui/Icons/index";
/**
 * Контент модалки обновления метки
 */
function getPhotos(images) {
  return images.map(
    (image) => `<img class="photo-item" key={"1"} src=${image} alt="info"/>`
  );
}
export const getUpdateMarkModalContent = ({
  markInfo,
  url,
  method = "post",
  iconColor = "var(--colorBlack)",
}) => {
  return `<div class="updateModalContent" >
  <form data-js-form=${JSON.stringify({ url, method, showModalAfterSuccess: "#modalSuccess", redirectUrlAfterSuccess: "/test.html", delayBeforeRedirect: 3000 })}>
      <h3 class="updateModalContent_title">Редактировать метку</h3>
      <p class="updateModalContent_address">${markInfo.address.street}, ${markInfo.address.house}</p>
          
      <div class="updateModalContent__type">
        <p class="modal-title">Тип метки</p>     
        ${CustomSelect({
          extraAttrs: [
            {
              name: "data-js-update-mark-info-select-type",
              value: markInfo.id,
            },
            {
              name: "name",
              value: "typeMark",
            },
          ],
          cfg: {
            preset: "default",
            itemSelectText: "",
            searchEnabled: false,
            choices: [
              {
                value: "Бar",
                label: "Бар",
                selected: markInfo.type === "bars",
                customProperties: {
                  icon: BarIcon({ iconColor: "var(--colorRed)" }),
                },
              },
              {
                value: "Ресторан",
                label: "Ресторан",
                selected: markInfo.type === "restaurant",
                customProperties: {
                  icon: RestIcon({ iconColor: "var(--colorOrange)" }),
                },
              },
              {
                value: "Ночной клуб",
                label: "Ночной клуб",
                selected: markInfo.type === "club",
                customProperties: {
                  icon: MusicIcon({ iconColor: "var(--colorBlueLight)" }),
                },
              },
              {
                value: "Театр",
                label: "Театр",
                selected: markInfo.type === "theatre",
                customProperties: {
                  icon: TheatreIcon({ iconColor: "var(--colorViolet)" }),
                },
              },
              {
                value: "Кино",
                label: "Кино",
                selected: markInfo.type === "cinema",
                customProperties: {
                  icon: CinemaIcon({ iconColor: "var(--colorGreenLime)" }),
                },
              },
            ],
          },
        })}
        
     </div>
      <div class="updateModalContent__comment">
        <p class="modal-title">Комментарий пользователя</p>
        <textarea class="modal-textarea" type="comment" name="comment">${markInfo.comment}</textarea>
      </div>
      <div class="updateModalContent__photos">
        <p class="modal-title">Фотографии</p>
        <div class="modal-photos>
        ${getPhotos(markInfo.images)}         
        </div>
      </div>
      ${Button({
        text: "Отмена",
        extraAttrs: [
          {
            name: "type",
          },
        ],
      })}
      ${Button({
        text: "Сохранить",
        extraAttrs: [
          {
            name: "type",
            value: "submit",
          },
        ],
      })}
      </div>
      
        
  </form>
  </div>`;
};
