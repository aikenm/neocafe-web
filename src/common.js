import americano from "./images/photos/Американо.jpg";
import capuccino from "./images/photos/Капучино.jpg";
import bagrovyi_zakat from "./images/photos/Багровый закат.jpg";
import brauni from "./images/photos/Брауни.jpg";
import gintonik from "./images/photos/Джин Тоник.jpg";
import domashniy_pirog from "./images/photos/Домашний пирог.jpg";
import greentea from "./images/photos/Зеленый Чай.jpg";
import kruassan from "./images/photos/Круасаны.jpg";
import latte from "./images/photos/Латте.jpg";
import machiato from "./images/photos/Макиато.jpg";
import mohito from "./images/photos/Мохито.jpg";
import san_sebastian from "./images/photos/Сан-себастьян.jpg";
import teramisu from "./images/photos/Терамису.jpg";
import panakota from "./images/photos/Панакота.jpg";
import teawithmilk from "./images/photos/Чай с молоком.jpg";
import blacktea from "./images/photos/Черный чай.jpg";
import cheesecake from "./images/photos/Чизкейк.jpg";
import espresso from "./images/photos/Эспрессо.jpg";
import applepirog from "./images/photos/Яблочный пирог.jpg";

export const menuItems = {
  coffee: [
    {
      id: 1,
      name: "Американо",
      price: 199,
      image: americano,
      description:
        "Америка́но — способ приготовления кофе, заключающийся в соединении определённого количества горячей воды и эспрессо.",
      ingredients: ["18 г свежемолотого кофе", "120 мл горячей воды"],
    },
    {
      id: 2,
      name: "Капучино",
      price: 200,
      image: capuccino,
      description:
        "Капучи́но — кофейный напиток итальянской кухни на основе эспрессо с добавлением в него подогретого вспененного молока.",
      ingredients: ["18 г свежемолотого кофе", "150 мл молока"],
    },
    {
      id: 3,
      name: "Латте",
      price: 140,
      image: latte,
      description:
        "Ла́тте — кофейный напиток на основе молока, представляющий собой трёхслойную смесь из молочной пены, молока и кофе эспрессо.",
      ingredients: ["18 г свежемолотого кофе", "200 мл молока"],
    },
    {
      id: 4,
      name: "Макиато",
      price: 250,
      image: machiato,
      description:
        "Макиато — кофейный напиток, изготавливаемый путём добавления к эспрессо минимального количества молока, обычно взбитого.",
      ingredients: ["18 г свежемолотого кофе", "10 мл молока"],
    },
    {
      id: 5,
      name: "Эспрессо",
      price: 250,
      image: espresso,
      description:
        "Эспре́ссо — метод приготовления кофе путём прохождения горячей воды под давлением через фильтр с молотым кофе.",
      ingredients: ["18 г свежемолотого кофе", "30 мл горячей воды"],
    },
  ],
  desserts: [
    {
      id: 6,
      name: "Тирамису",
      price: 149,
      image: teramisu,
      description:
        "Слоеный десерт с кремом маскарпоне, пропитанный эспрессо и покрытый какао.",
      ingredients: [
        "250 г маскарпоне",
        "100 мл эспрессо",
        "3 яйца",
        "75 г сахара",
        "200 г печенья Савоярди",
        "Какао для посыпки",
      ],
    },
    {
      id: 7,
      name: "Чизкейк",
      price: 170,
      image: cheesecake,
      description:
        "Нежный сырный десерт на основе печенья с фруктовым топпингом.",
      ingredients: [
        "200 г сливочного сыра",
        "100 г сахара",
        "200 г печенья для основы",
        "50 г сливочного масла",
        "100 г ягодного топпинга",
      ],
    },
    {
      id: 8,
      name: "Брауни",
      price: 125,
      image: brauni,
      description:
        "Бра́уни — шоколадное пирожное коричневого цвета, прямоугольные куски нарезанного шоколадного пирога.",
      ingredients: [
        "200 г черного шоколада",
        "150 г сахара",
        "100 г сливочного масла",
        "3 яйца",
        "100 г муки",
        "50 г грецких орехов",
      ],
    },
    {
      id: 9,
      name: "Панакота",
      price: 99,
      image: panakota,
      description: "Итальянский десерт на основе сливок, сахара и желатина.",
      ingredients: [
        "500 мл сливок",
        "100 г сахара",
        "5 г желатина",
        "Ванильный экстракт",
        "100 мл фруктового соуса",
      ],
    },
    {
      id: 10,
      name: "Сан-Себастьян",
      price: 400,
      image: san_sebastian,
      description:
        "В «Сан-Себастьяне» сердцевина остаётся кремовой, твердеет он только по краям. Так получается, потому что его выпекают при высокой температуре — 250 градусах — в течение 20 минут.",
      ingredients: [
        "500 г сливочного сыра",
        "200 г сахара",
        "4 яйца",
        "200 мл сливок",
        "30 г муки",
      ],
    },
  ],
  pastries: [
    {
      id: 11,
      name: "Круассан",
      price: 160,
      image: kruassan,
      description:
        "Круасса́н — небольшое мучное кондитерское изделие, булочка в форме полумесяца из слоёного теста.",
      ingredients: [
        "250 г слоеного теста",
        "50 г сливочного масла",
        "1 яйцо (для смазывания)",
      ],
    },
    {
      id: 12,
      name: "Домашний пирог",
      price: 150,
      image: domashniy_pirog,
      description: "Сладкий пирог с начинкой из фруктов и крема.",
      ingredients: [
        "200 г слоеного теста",
        "100 г фруктовой начинки",
        "50 г крема",
      ],
    },
    {
      id: 13,
      name: "Яблочный пирог",
      price: 200,
      image: applepirog,
      description: "Сладкий пирог с начинкой из яблок.",
      ingredients: ["200 г слоеного теста", "100 г яблок", "50 г сахара"],
    },
  ],
  cocktails: [
    {
      id: 14,
      name: "Мохито",
      price: 299,
      image: mohito,
      description: "Освежающий коктейль с мятой, лаймом и ромом.",
      ingredients: [
        "50 мл рома",
        "30 мл сахарного сиропа",
        "1 лайм",
        "Несколько веточек мяты",
        "Содовая",
      ],
    },
    {
      id: 15,
      name: "Багровый закат",
      price: 300,
      image: bagrovyi_zakat,
      description: "Коктейль с гранатовым соком и водкой.",
      ingredients: [
        "50 мл водки",
        "100 мл гранатового сока",
        "30 мл сахарного сиропа",
        "Лед",
      ],
    },
    {
      id: 16,
      name: "Джин Тоник",
      price: 350,
      image: gintonik,
      description:
        "Джин-тоник — коктейль, содержащий джин и тоник, с добавлением лайма или лимона и льда.",
      ingredients: ["50 мл джина", "150 мл тоника", "Лайм или лимон", "Лед"],
    },
  ],
  tea: [
    {
      id: 17,
      name: "Зеленый чай",
      price: 89,
      image: greentea,
      description:
        "Ароматный и освежающий зеленый чай, богатый антиоксидантами.",
      ingredients: ["2 г зеленого чайного листа", "250 мл горячей воды"],
    },
    {
      id: 18,
      name: "Черный чай",
      price: 99,
      image: blacktea,
      description: "Крепкий и бодрящий черный чай с насыщенным вкусом.",
      ingredients: ["2 г черного чайного листа", "250 мл горячей воды"],
    },
    {
      id: 19,
      name: "Чай с молоком",
      price: 100,
      image: teawithmilk,
      description: "Чай с добавлением молока.",
      ingredients: [
        "2 г черного чайного листа",
        "200 мл горячей воды",
        "50 мл молока",
      ],
    },
  ],
};

export const testOrders = [
  {
    id: "1",
    orderType: "takeaway",
    customerName: "Алексей",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.desserts[1], quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "2",
    orderType: "takeaway",
    customerName: "Санжар",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.coffee[1], quantity: 1 },
      { ...menuItems.desserts[3], quantity: 1 },
      { ...menuItems.desserts[2], quantity: 2 },
      { ...menuItems.desserts[1], quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "3",
    orderType: "takeaway",
    customerName: "Болот",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.pastries[0], quantity: 2 },
      { ...menuItems.desserts[1], quantity: 1 },
    ],
    status: "new",
  },

  {
    id: "4",
    orderType: "takeaway",
    customerName: "Ольга",
    items: [
      { ...menuItems.pastries[2], quantity: 3 },
      { ...menuItems.tea[1], quantity: 1 },
    ],
    status: "inProgress",
  },
  {
    id: "5",
    orderType: "takeaway",
    customerName: "Бекжан",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.desserts[3], quantity: 3 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "inProgress",
  },
  {
    id: "6",
    orderType: "takeaway",
    customerName: "Айбек",
    items: [
      { ...menuItems.pastries[2], quantity: 3 },
      { ...menuItems.tea[1], quantity: 1 },
    ],
    status: "inProgress",
  },

  {
    id: "7",
    orderType: "takeaway",
    customerName: "Айжан",
    items: [
      { ...menuItems.coffee[0], quantity: 3 },
      { ...menuItems.coffee[3], quantity: 1 },
      { ...menuItems.desserts[0], quantity: 3 },
    ],
    status: "ready",
  },
  {
    id: "8",
    orderType: "takeaway",
    customerName: "Дастан",
    items: [
      { ...menuItems.pastries[2], quantity: 2 },
      { ...menuItems.tea[1], quantity: 2 },
    ],
    status: "ready",
  },
  {
    id: "9",
    orderType: "takeaway",
    customerName: "Азамат",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "ready",
  },

  {
    id: "10",
    orderType: "takeaway",
    customerName: "Ольга",
    items: [
      { ...menuItems.pastries[2], quantity: 3 },
      { ...menuItems.tea[1], quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "11",
    orderType: "takeaway",
    customerName: "Иван",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "completed",
  },

  // Inplace orders

  {
    id: "12",
    orderType: "inhouse",
    customerName: "Айгерим",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.desserts[1], quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "13",
    orderType: "inhouse",
    customerName: "Асан",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.coffee[1], quantity: 1 },
      { ...menuItems.desserts[3], quantity: 1 },
      { ...menuItems.desserts[2], quantity: 2 },
      { ...menuItems.desserts[1], quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "14",
    orderType: "inhouse",
    customerName: "Айбике",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.pastries[0], quantity: 2 },
      { ...menuItems.desserts[1], quantity: 1 },
    ],
    status: "new",
  },

  {
    id: "15",
    orderType: "inhouse",
    customerName: "Айжана",
    items: [
      { ...menuItems.pastries[2], quantity: 3 },
      { ...menuItems.tea[1], quantity: 1 },
    ],
    status: "inProgress",
  },
  {
    id: "16",
    orderType: "inhouse",
    customerName: "Бекжан",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.desserts[3], quantity: 3 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "inProgress",
  },
  {
    id: "17",
    orderType: "inhouse",
    customerName: "Айбек",
    items: [
      { ...menuItems.pastries[2], quantity: 3 },
      { ...menuItems.tea[1], quantity: 1 },
    ],
    status: "inProgress",
  },

  {
    id: "18",
    orderType: "inhouse",
    customerName: "Айжан",
    items: [
      { ...menuItems.coffee[0], quantity: 3 },
      { ...menuItems.coffee[3], quantity: 1 },
      { ...menuItems.desserts[0], quantity: 3 },
    ],
    status: "ready",
  },
  {
    id: "19",
    orderType: "inhouse",
    customerName: "Дастан",
    items: [
      { ...menuItems.pastries[2], quantity: 2 },
      { ...menuItems.tea[1], quantity: 2 },
    ],
    status: "ready",
  },
  {
    id: "20",
    orderType: "inhouse",
    customerName: "Азамат",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "ready",
  },

  {
    id: "21",
    orderType: "inhouse",
    customerName: "Айкен",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "22",
    orderType: "takeaway",
    customerName: "Жанара",
    items: [
      { ...menuItems.coffee[1], quantity: 2 },
      { ...menuItems.pastries[1], quantity: 1 },
      { ...menuItems.desserts[4], quantity: 2 },
    ],
    status: "inProgress",
  },
  {
    id: "23",
    orderType: "takeaway",
    customerName: "Ержан",
    items: [
      { ...menuItems.tea[0], quantity: 2 },
      { ...menuItems.pastries[2], quantity: 1 },
      { ...menuItems.desserts[0], quantity: 1 },
    ],
    status: "inProgress",
  },
  {
    id: "24",
    orderType: "takeaway",
    customerName: "Канат",
    items: [
      { ...menuItems.cocktails[1], quantity: 1 },
      { ...menuItems.desserts[2], quantity: 3 },
    ],
    status: "ready",
  },
  {
    id: "25",
    orderType: "takeaway",
    customerName: "Майрам",
    items: [
      { ...menuItems.coffee[2], quantity: 2 },
      { ...menuItems.pastries[0], quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "26",
    orderType: "takeaway",
    customerName: "Данияр",
    items: [
      { ...menuItems.tea[1], quantity: 1 },
      { ...menuItems.pastries[2], quantity: 2 },
    ],
    status: "new",
  },
  {
    id: "27",
    orderType: "takeaway",
    customerName: "Жанара",
    items: [
      { ...menuItems.coffee[3], quantity: 1 },
      { ...menuItems.desserts[1], quantity: 2 },
    ],
    status: "inProgress",
  },
  {
    id: "28",
    orderType: "takeaway",
    customerName: "Мурат",
    items: [
      { ...menuItems.cocktails[2], quantity: 1 },
      { ...menuItems.desserts[0], quantity: 1 },
    ],
    status: "ready",
  },
  {
    id: "29",
    orderType: "takeaway",
    customerName: "Айгуль",
    items: [
      { ...menuItems.coffee[1], quantity: 2 },
      { ...menuItems.pastries[1], quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "30",
    orderType: "takeaway",
    customerName: "Сауле",
    items: [
      { ...menuItems.tea[0], quantity: 1 },
      { ...menuItems.desserts[4], quantity: 2 },
    ],
    status: "new",
  },
  {
    id: "31",
    orderType: "takeaway",
    customerName: "Алишер",
    items: [
      { ...menuItems.coffee[2], quantity: 1 },
      { ...menuItems.pastries[2], quantity: 1 },
    ],
    status: "inProgress",
  },
  {
    id: "32",
    orderType: "takeaway",
    customerName: "Гульнур",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.desserts[2], quantity: 3 },
    ],
    status: "ready",
  },
  {
    id: "33",
    orderType: "takeaway",
    customerName: "Айдос",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.pastries[0], quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "34",
    orderType: "inhouse",
    customerName: "Камиля",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.pastries[1], quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "35",
    orderType: "inhouse",
    customerName: "Мурат",
    items: [
      { ...menuItems.cocktails[2], quantity: 1 },
      { ...menuItems.desserts[3], quantity: 1 },
      { ...menuItems.coffee[2], quantity: 2 },
    ],
    status: "inProgress",
  },
  {
    id: "36",
    orderType: "inhouse",
    customerName: "Гулнара",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.pastries[2], quantity: 2 },
    ],
    status: "ready",
  },
  {
    id: "37",
    orderType: "inhouse",
    customerName: "Айжан",
    items: [
      { ...menuItems.coffee[1], quantity: 2 },
      { ...menuItems.desserts[4], quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "38",
    orderType: "inhouse",
    customerName: "Ерлан",
    items: [
      { ...menuItems.coffee[0], quantity: 1 },
      { ...menuItems.pastries[1], quantity: 2 },
    ],
    status: "inProgress",
  },
  {
    id: "39",
    orderType: "inhouse",
    customerName: "Асия",
    items: [
      { ...menuItems.cocktails[1], quantity: 1 },
      { ...menuItems.desserts[2], quantity: 3 },
    ],
    status: "inProgress",
  },
  {
    id: "40",
    orderType: "inhouse",
    customerName: "Бекзат",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.desserts[3], quantity: 1 },
    ],
    status: "ready",
  },
  {
    id: "41",
    orderType: "inhouse",
    customerName: "Салтанат",
    items: [
      { ...menuItems.cocktails[2], quantity: 1 },
      { ...menuItems.pastries[2], quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "42",
    orderType: "takeaway",
    customerName: "Ермек",
    items: [
      { ...menuItems.tea[0], quantity: 1 },
      { ...menuItems.desserts[0], quantity: 2 },
    ],
    status: "inProgress",
  },
  {
    id: "43",
    orderType: "takeaway",
    customerName: "Рустем",
    items: [
      { ...menuItems.coffee[1], quantity: 2 },
      { ...menuItems.desserts[4], quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "44",
    orderType: "takeaway",
    customerName: "Алмаз",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.pastries[2], quantity: 2 },
    ],
    status: "ready",
  },
  {
    id: "45",
    orderType: "takeaway",
    customerName: "Бахтияр",
    items: [
      { ...menuItems.coffee[0], quantity: 2 },
      { ...menuItems.desserts[1], quantity: 1 },
    ],
    status: "completed",
  },
];
