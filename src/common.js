import americano from "./images/photos/Американо";
import capuccino from "./images/photos/Капучино";
import bagrovyi_zakat from "./images/photos/Багровый закат";
import brauni from "./images/photos/Брауни";
import gintonik from "./images/photos/Джин Тоник";
import domashniy_pirog from "./images/photos/Домашний пирог";
import greentea from "./images/photos/Зеленый чай";
import kruassan from "./images/photos/Круасаны";
import latte from "./images/photos/Латте";
import machiato from "./images/photos/Махиато";
import mohito from "./images/photos/Мохито";
import beer from "./images/photos/Пиво с вином";
import san_sebastian from "./images/photos/Сан-себастьян";
import teramisu from "./images/photos/Терамису";
import tort from "./images/photos/Торт";
import teawithmilk from "./images/photos/Чай с молоком";
import blacktea from "./images/photos/Черный чай";
import cheesecake from "./images/photos/Чизкейк";
import espresso from "./images/photos/Эспрессо";
import applepirog from "./images/photos/Яблочный пирог";

export const menuItems = {
  coffee: [
    {
      id: 1,
      name: "Американо",
      price: 199,
      image: americano,
      description:
        "Америка́но — способ приготовления кофе, заключающийся в соединении определённого количества горячей воды и эспрессо",
      ingredients: ["18 г свежемолотого кофе", "120 мл горячей воды"],
    },
    {
      id: 2,
      name: "Капучино",
      price: 200,
      image: capuccino,
      description:
        "Капучи́но — кофейный напиток итальянской кухни на основе эспрессо с добавлением в него подогретого вспененного молока",
      ingredients: ["18 г свежемолотого кофе", "150 мл молока"],
    },
    {
      id: 3,
      name: "Латте",
      price: 140,
      image: latte,
      description:
        "Ла́тте — кофейный напиток на основе молока, представляющий собой трёхслойную смесь из молочной пены, молока и кофе эспрессо",
      ingredients: ["18 г свежемолотого кофе", "200 мл молока"],
    },
    {
      id: 4,
      name: "Макиато",
      price: 250,
      image: machiato,
      description:
        "Макиато — кофейный напиток, изготавливаемый путем добавления к эспрессо минимального количества молока, обычно взбитого. Макиато существенно крепче и ароматнее, казалось бы, сходного по ингредиентам капучино. Подобно капучино, служит основой для латте-арта",
      ingredients: ["18 г свежемолотого кофе", "200 мл молока"],
    },
    {
      id: 5,
      name: "Эспрессо",
      price: 250,
      image: espresso,
      description:
        "Эспре́ссо — метод приготовления кофе путём прохождения горячей воды под давлением через фильтр с молотым кофе. Эспрессо пользуется большой популярностью во всём мире и, прежде всего, на юге Европы — в Италии, Испании и Португалии.",
      ingredients: ["18 г свежемолотого кофе", "200 мл молока"],
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
        "500 мл сливок",
        "100 г сахара",
        "5 г желатина",
        "Ванильный экстракт",
        "100 мл фруктового соуса",
      ],
    },
    {
      id: 9,
      name: "Торт",
      price: 99,
      image: tort,
      description: "Торт простой домашний",
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
      name: "Сан-себастьян",
      price: 400,
      image: san_sebastian,
      description:
        "В «Сан-Себастьяне» сердцевина остаётся кремовой, твердеет он только по краям. Так получается, потому что его выпекают при высокой температуре — 250 градусах — в течение 20 минут",
      ingredients: [
        "500 мл сливок",
        "100 г сахара",
        "5 г желатина",
        "Ванильный экстракт",
        "100 мл фруктового соуса",
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
        "Круасса́н — небольшое мучное кондитерское изделие, булочка в форме полумесяца из слоёного теста. Очень популярный продукт французской кухни, подаётся на завтрак к кофе для взрослых или к какао для детей; своеобразный символ этой страны",
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
      ingredients: ["200 г слоеного теста", "100 г яблок"],
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
        "Лайм",
        "Мята",
        "Содовая",
      ],
    },
    {
      id: 15,
      name: "Багровый закат",
      price: 300,
      image: bagrovyi_zakat,
      description: "Коктейль с пивом",
      ingredients: ["18 г свежемолотого кофе", "120 мл горячей воды"],
    },
    {
      id: 16,
      name: "Пиво с вином",
      price: 199,
      image: beer,
      description: "Пивной напиток в сочетании с вином.",
      ingredients: ["100 мл - пива", "50 мл - вина"],
    },
    {
      id: 17,
      name: "Джин Тоник",
      price: 350,
      image: gintonik,
      description:
        "Джин-тоник — коктейль, содержащий джин и тоник, с добавлением лайма или лимона и льда. Соотношение джина к тонику колеблется от равных пропорций до одного к трём. В Великобритании, США, Канаде, Австралии, Новой Зеландии и Ирландии коктейль часто называют Джи-энд-Ти",
      ingredients: [
        "50 мл рома",
        "30 мл сахарного сиропа",
        "Лайм",
        "Мята",
        "Содовая",
      ],
    },
  ],
  tea: [
    {
      id: 18,
      name: "Зеленый чай",
      price: 89,
      image: greentea,
      description:
        "Ароматный и освежающий зеленый чай, богатый антиоксидантами.",
      ingredients: ["2 г зеленого чайного листа", "250 мл горячей воды"],
    },
    {
      id: 19,
      name: "Черный чай",
      price: 99,
      image: blacktea,
      description: "Крепкий и бодрящий черный чай с насыщенным вкусом.",
      ingredients: ["2 г черного чайного листа", "250 мл горячей воды"],
    },
    {
      id: 20,
      name: "Чай с молоком",
      price: 100,
      image: teawithmilk,
      description: "Успокаивающий травяной чай с молоком.",
      ingredients: ["50 мл молока", "250 мл горячей воды"],
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
];
