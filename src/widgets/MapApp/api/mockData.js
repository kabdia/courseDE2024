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
    trk: {
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
    { id: "1", type: "bars", cords: [53.5, 58.9] },
    { id: "2", type: "restaurant", cords: [55.172822, 61.400586] },
    { id: "3", type: "trk", cords: [53.5, 57.9] },
    { id: "4", type: "theatre", cords: [55.177622, 61.413962] },
    { id: "5", type: "cinema", cords: [51.5, 57.9] },
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
    title: "Al Capone",
    type: "restaurant",
    address: {
      city: "Челябинск",
      house: "12",
      street: "ул. Братьев Кашириных",
    },
    comment:
      "Вкусная пицца. Значительно улучшилось качество алкоголя. Классные настойки, большой ассортимент от ягодных до горьких, на любой вкус. Доброжелательный, заботливый персонал.",
    images: [
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
  {
    id: "3",
    title: "Al Capone 2",
    type: "trk",
    address: {
      city: "Челябинск 2",
      house: "12a",
      street: "ул. Братьев Кашириных 2",
    },
    comment:
      "Хороший бар и караоке, по средам у них специальные акции с коктейлями 2",
    images: [
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
  {
    id: "4",
    title: "Al Capone 3",
    type: "theatre",
    address: {
      city: "Челябинск 2",
      house: "12",
      street: "ул. Братьев Кашириных 2",
    },
    comment:
      "Хороший бар и караоке, по средам у них специальные акции с коктейлями 2",
    images: [
      "assets/marksDetail/AlCapone/alcapone1.png",
      "assets/marksDetail/AlCapone/alcapone2.webp",
      "assets/marksDetail/AlCapone/alcapone3.webp",
      "assets/marksDetail/AlCapone/alcapone4.webp",
    ],
  },
  {
    id: "5",
    title: "Al Capone 4",
    type: "cinema",
    address: {
      city: "Челябинск 2",
      house: "12a",
      street: "ул. Братьев Кашириных 2",
    },
    comment:
      "Хороший бар и караоке, по средам у них специальные акции с коктейлями 2",
    images: [
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
];
