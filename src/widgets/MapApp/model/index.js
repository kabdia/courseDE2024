import { YandexMap } from "#shared/ui/Map/model";

export class MapApp {
  constructor(storeService, apiClient) {
    this.apiClient = apiClient;
    this.storeService = storeService;

    this.yandexMap = new YandexMap({
      containerSelector: "#map1",
      apiUrl: "https://api-maps.yandex.ru/2.1/?apikey",
      apiKey: "b4a559eb-311c-4123-8025-480ecdc62549",
      lang: "ru_RU",
      center: [55.751574, 37.573856],
      zoom: 10,
    });

    this.yandexMap
      .initMap()
      .then((res) => {
        console.debug("Карта инциализирована", res, this.yandexMap.instance);
        this.yandexMap.addMark();
      })
      .catch((e) => console.error(e));

    this.yandexMap.addMark();

    this.subscribeForStoreService();
    console.debug(
      "Тут будем реализовывать логику нашего виджета, вот готовый стор сервис ->",
      this.storeService
    );
    setTimeout(() => {
      this.storeService.updateStore("addMarkers", [
        { id: 33144, value: "test" },
        { id: 33145, value: "test1" },
        { id: 33147, value: "test2" },
      ]);
    }, 5000);
  }

  handleMarkersChanged() {
    console.debug("markers changed", this.storeService.getMarkers());
  }

  handleFiltersChanged() {
    console.debug("markers changed", this.storeService.getFilters());
  }

  subscribeForStoreService() {
    this.markerSubscription = this.storeService.subscribeToMarkers(() => {
      this.handleMarkersChanged();
    });
    this.filterSubscription = this.storeService.subscribeToFilters(() => {
      this.handleFiltersChanged();
    });
  }

  unsubscribeFromStoreService() {
    this.markerSubscription?.();
    this.subscribeOnStoreChange?.();
  }
}
