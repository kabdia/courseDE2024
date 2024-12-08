export const filerCfg = {
  inputs: {
    search: {
      value: null,
      isChecked: "null",
      isDisabled: "null",
    },
    bars: {
      value: null,
      isChecked: true,
      isDisabled: false,
    },
    restaurant: {
      value: null,
      isChecked: true,
      isDisabled: false,
    },
    club: {
      value: null,
      isChecked: true,
      isDisabled: false,
    },
    theatre: {
      value: null,
      isChecked: true,
      isDisabled: false,
    },
    cinema: {
      value: null,
      isChecked: true,
      isDisabled: false,
    },
  },
};

export const listMarsMockResponse = {
  marks: [
    { id: "1", type: "bars", cords: [55.177622, 61.413962] },
    { id: "2", type: "restaurant", cords: [55.174435, 61.408131] },
    { id: "3", type: "restaurant", cords: [55.173039, 61.400613] },
    { id: "4", type: "theatre", cords: [55.172316, 61.4017] },
    { id: "5", type: "theatre", cords: [55.172627, 61.411304] },
    { id: "6", type: "cinema", cords: [55.169989, 61.390113] },
    { id: "7", type: "bars", cords: [55.173372, 61.418569] },
    { id: "8", type: "bars", cords: [55.167723, 61.400105] },
    { id: "9", type: "bars", cords: [55.167575, 61.398422] },
    { id: "10", type: "club", cords: [55.167762, 61.39989] },
  ],
};

export const marksDetailMockResponse = [
  {
    id: "1",
    title: "Al Capone",
    type: "bars",
    address: {
      city: "Челябинск",
      house: "12a",
      street: "ул. Братьев Кашириных",
    },
    comment:
      "Хороший бар и караоке, по средам у них специальные акции с коктейлями",
    images: [
      "assets/marksDetail/AlCapone/alcapone1.png",
      "assets/marksDetail/AlCapone/alcapone2.png",
      "assets/marksDetail/AlCapone/alcapone3.png",
      "assets/marksDetail/AlCapone/alcapone4.png",
    ],
  },
  {
    id: "2",
    title: "Nero Mulino",
    type: "restaurant",
    address: {
      city: "Челябинск",
      house: "1",
      street: "ул. Свободы",
    },
    comment:
      "Очень вкусная паста, вернёмся обязательно попробовать что нибудь ещё.",
    images: [
      "assets/marksDetail/NeroMulino/mulino1.jpg",
      "assets/marksDetail/NeroMulino/mulino2.jpg",
    ],
  },
  {
    id: "3",
    title: "The Grillxayc",
    type: "restaurant",
    address: {
      city: "Челябинск",
      house: "25A",
      street: "ул. Кирова",
    },
    comment:
      "Несколько раз бывала в кафе, очень уютно, порадовало меню, разнообразие достаточно, цены приемлемые",
    images: [
      "assets/marksDetail/AlCapone/grillhouse.png",
      "assets/marksDetail/AlCapone/grillhouse.jpg",
    ],
  },
  {
    id: "4",
    title: "Цирк",
    type: "theatre",
    address: {
      city: "Челябинск",
      house: "25",
      street: "ул. Кирова",
    },
    comment:
      "Ходили семьей в цирк недавно. Нам понравилось представление, окунулся в детство) Внутри цирк тоже в хорошем состоянии",
    images: [
      "assets/marksDetail/Pechka/pechka1.png",
      "assets/marksDetail/Pechka/pechka2.png",
      "assets/marksDetail/Pechka/pechka3.png",
    ],
  },
  {
    id: "5",
    title: "Театральное пространство свободы",
    type: "theatre",
    address: {
      city: "Челябинск",
      house: "2, корп. 10",
      street: "ул. Свободы",
    },
    comment:
      "Лучшее независимое театральное объединение города. Мощная актёрская группа под руководством сильного режиссёра",
    images: [
      "assets/marksDetail/theatre/theatre1.png",
      "assets/marksDetail/theatre/theatre2.png",
    ],
  },
  {
    id: "6",
    title: "Мегаполис",
    type: "cinema",
    address: {
      city: "Челябинск",
      house: "51А",
      street: "Свердловский просп.",
    },
    comment:
      "Хорошее место для отдыха, можно сходить в кинотеатр, вкусно покушать в разных кафе, детям поиграть в различные игры",
    images: [
      "assets/marksDetail/Megapolis/mega1.png",
      "assets/marksDetail/Megapolis/mega2.png",
      "assets/marksDetail/Megapolis/mega3.png",
    ],
  },
  {
    id: "8",
    title: "Шишка",
    type: "bars",
    address: {
      city: "Челябинск",
      house: "105",
      street: "ул. Труда",
    },
    comment:
      "Наше любимое место! Выпить, закусить, официантка знает наизусть меню, все вежливо, приятно.",
    images: [
      "assets/marksDetail/Shishka/shiska1.png",
      "assets/marksDetail/Shishka/shiska2.png",
    ],
  },
  {
    id: "9",
    title: "Doski",
    type: "bars",
    address: {
      city: "Челябинск",
      house: "5",
      street: "ул. Елькина",
    },
    comment:
      "Наше любимое место! Выпить, закусить, официантка знает наизусть меню, все вежливо, приятно.",
    images: [
      "assets/marksDetail/Doski/doski1.png",
      "assets/marksDetail/Doski/doski2.png",
      "assets/marksDetail/Doski/doski3.png",
    ],
  },
  {
    id: "10",
    title: "Gipsy Bar",
    type: "club",
    address: {
      city: "Челябинск",
      house: "45",
      street: "ул. Труда",
    },
    comment:
      "Отличный бар! Прекрасное место для расслабления после рабочего дня. Уютная атмосфера и отличный выбор напитков.",
    images: [
      "assets/marksDetail/Pechka/pechka1.png",
      "assets/marksDetail/Pechka/pechka2.png",
      "assets/marksDetail/Pechka/pechka3.png",
    ],
  },
];
