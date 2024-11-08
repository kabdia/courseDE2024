import { createStore as create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

/**
 * Функция для создания Store с уникальным именем
 * @param {string} storageName - Имя хранилища
 * @return {Function} - Функция, возвращающая Store
 */
export const createStore = (storageName) => {
  return create(
    subscribeWithSelector(
      persist(
        (set) => ({
          markers: [],
          activeFilters: {},
          setMarkers: (markers) => set({ markers }),
          addMarker: (marker) => {
            set((state) => {
              // Проверка, есть ли уже маркер с таким ID
              const exists = state.markers.some((m) => m?.id === marker.id);
              if (exists) {
                console.warn(`Marker with ID ${marker.id} already exists.`);
                return state; // Не изменяем состояние, если маркер с таким ID уже существует
              }
              return {
                markers: [...state.markers, marker], // Добавляем новый маркер
              };
            });
          },
          // ДЗ ФУНКЦИЯ ДОБАВЛЕНИЯ СПИСКА МАРКЕРОВ
          addMarkersList: (markers) => {
            set((state) => {
              // Если передан один маркер, оборачиваем его в массив
              const markersArray = Array.isArray(markers) ? markers : [markers];

              // Проверяем, чтобы каждый маркер в списке был уникальным
              const newMarkers = markersArray.filter((marker) => {
                const exists = state.markers.some((m) => m?.id === marker.id);
                if (exists) {
                  console.warn(`Marker with ID ${marker.id} already exists.`);
                }
                return !exists; // Добавляем только уникальные маркеры
              });
              // Возвращаем обновленное состояние с добавленными маркерами
              return {
                markers: [...state.markers, ...newMarkers],
              };
            });
          },
          removeMarker: (markerId) =>
            set((state) => ({
              markers: state.markers.filter((marker) => marker.id !== markerId),
            })),
          //ДЗ ФУНКЦИЯ УДАЛЕНИЯ СПИСКА МАРКЕРОВ
          removeMarkers: (markerIds) =>
            set((state) => ({
              markers: state.markers.filter(
                (marker) => !markerIds.includes(marker.id)
              ),
            })),
          setFilters: (filters) => set({ activeFilters: filters }),
          // ДЗ МЕТОД ОЧИСТКИ ФИЛЬТРОВ
          clearFilters: () => set({ activeFilters: {} }),
        }),
        {
          name: storageName, // Используем переданное имя хранилища
          getStorage: () => localStorage,
        }
      )
    )
  );
};
