import coffeeIcon from "./images/coffee-icon.svg";
import bakeryIcon from "./images/bakery-icon.svg";
import dessertsIcon from "./images/desserts-icon.svg";
import coctailsIcon from "./images/coctails-icon.svg";
import teaIcon from "./images/tea-icon.svg";

export const menuItems = {
  coffee: [
    {
      id: 1,
      name: "Эспрессо",
      price: 100,
      image: coffeeIcon,
      description:
        "Классический итальянский кофе, приготовленный под высоким давлением.",
      ingredients: ["18 г свежемолотого кофе", "30 мл воды"],
    },
    {
      id: 2,
      name: "Американо",
      price: 120,
      image: coffeeIcon,
      description:
        "Легкий кофе, приготовленный путем добавления горячей воды к эспрессо.",
      ingredients: ["18 г свежемолотого кофе", "120 мл горячей воды"],
    },
    {
      id: 3,
      name: "Капучино",
      price: 150,
      image: coffeeIcon,
      description: "Ароматный кофе с добавлением пенного молока.",
      ingredients: ["18 г свежемолотого кофе", "150 мл молока"],
    },
    {
      id: 4,
      name: "Латте",
      price: 130,
      image: coffeeIcon,
      description: "Мягкий кофе с большим количеством горячего молока.",
      ingredients: ["18 г свежемолотого кофе", "200 мл молока"],
    },
    {
      id: 5,
      name: "Флэт Уайт",
      price: 140,
      image: coffeeIcon,
      description: "Сильный кофе с малым количеством пенного молока.",
      ingredients: ["18 г свежемолотого кофе", "100 мл молока"],
    },
  ],
  desserts: [
    {
      id: 6,
      name: "Тирамису",
      price: 150,
      image: dessertsIcon,
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
      image: dessertsIcon,
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
      name: "Панна Котта",
      price: 160,
      image: dessertsIcon,
      description:
        "Итальянский кремовый десерт, подаваемый с фруктовым соусом.",
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
      id: 9,
      name: "Круассан",
      price: 80,
      image: bakeryIcon,
      description:
        "Слоеное выпечное изделие, хрустящее снаружи и мягкое внутри.",
      ingredients: [
        "250 г слоеного теста",
        "50 г сливочного масла",
        "1 яйцо (для смазывания)",
      ],
    },
    {
      id: 10,
      name: "Датский пирог",
      price: 90,
      image: bakeryIcon,
      description: "Сладкий пирог с начинкой из фруктов и крема.",
      ingredients: [
        "200 г слоеного теста",
        "100 г фруктовой начинки",
        "50 г крема",
      ],
    },
    {
      id: 11,
      name: "Булочка с корицей",
      price: 85,
      image: bakeryIcon,
      description: "Пышная булочка с ароматом корицы и сахарной глазурью.",
      ingredients: [
        "250 г теста для булочек",
        "50 г сахара",
        "10 г корицы",
        "30 г сливочного масла",
        "50 г сахарной глазури",
      ],
    },
  ],
  cocktails: [
    {
      id: 12,
      name: "Мохито",
      price: 180,
      image: coctailsIcon,
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
      id: 13,
      name: "Мартини",
      price: 200,
      image: coctailsIcon,
      description: "Классический коктейль с вермутом и джином.",
      ingredients: [
        "50 мл джина",
        "10 мл сухого вермута",
        "Оливка для украшения",
      ],
    },
    {
      id: 14,
      name: "Дайкири",
      price: 190,
      image: coctailsIcon,
      description: "Тропический коктейль на основе рома с лимонным соком.",
      ingredients: [
        "50 мл белого рома",
        "20 мл лимонного сока",
        "10 мл сахарного сиропа",
      ],
    },
  ],
  tea: [
    {
      id: 15,
      name: "Зеленый чай",
      price: 80,
      image: teaIcon,
      description:
        "Ароматный и освежающий зеленый чай, богатый антиоксидантами.",
      ingredients: ["2 г зеленого чайного листа", "250 мл горячей воды"],
    },
    {
      id: 16,
      name: "Черный чай",
      price: 80,
      image: teaIcon,
      description: "Крепкий и бодрящий черный чай с насыщенным вкусом.",
      ingredients: ["2 г черного чайного листа", "250 мл горячей воды"],
    },
    {
      id: 17,
      name: "Травяной чай",
      price: 85,
      image: teaIcon,
      description: "Успокаивающий травяной чай с нотками мяты и ромашки.",
      ingredients: [
        "2 г смеси трав (мята, ромашка, липа)",
        "250 мл горячей воды",
      ],
    },
  ],
};

export const testOrders = [
  {
    id: "1",
    orderNumber: "M-1",
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
    orderNumber: "M-2",
    orderType: "takeaway",
    customerName: "Ольга",
    items: [
      { ...menuItems.pastries[2], quantity: 3 },
      { ...menuItems.tea[1], quantity: 1 },
    ],
    status: "inProgress",
  },
  {
    id: "3",
    orderNumber: "M-3",
    orderType: "takeaway",
    customerName: "Иван",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "completed",
  },
];
