import coffeeIcon from "./images/coffee-icon.svg";
import bakeryIcon from "./images/bakery-icon.svg";
import dessertsIcon from "./images/desserts-icon.svg";
import coctailsIcon from "./images/coctails-icon.svg";
import teaIcon from "./images/tea-icon.svg";

export const menuItems = {
  coffee: [
    { id: 1, name: "Эспрессо", price: 100, image: coffeeIcon },
    { id: 2, name: "Американо", price: 120, image: coffeeIcon },
    { id: 3, name: "Капучино", price: 150, image: coffeeIcon },
    { id: 4, name: "Латте", price: 130, image: coffeeIcon },
    { id: 5, name: "Флэт Уайт", price: 140, image: coffeeIcon },
  ],
  desserts: [
    { id: 6, name: "Тирамису", price: 150, image: dessertsIcon },
    { id: 7, name: "Чизкейк", price: 170, image: dessertsIcon },
    { id: 8, name: "Панна Котта", price: 160, image: dessertsIcon },
  ],
  pastries: [
    { id: 9, name: "Круассан", price: 80, image: bakeryIcon },
    { id: 10, name: "Датский пирог", price: 90, image: bakeryIcon },
    { id: 11, name: "Булочка с корицей", price: 85, image: bakeryIcon },
  ],
  cocktails: [
    { id: 12, name: "Мохито", price: 180, image: coctailsIcon },
    { id: 13, name: "Мартини", price: 200, image: coctailsIcon },
    { id: 14, name: "Дайкири", price: 190, image: coctailsIcon },
  ],
  tea: [
    { id: 15, name: "Зеленый чай", price: 80, image: teaIcon },
    { id: 16, name: "Черный чай", price: 80, image: teaIcon },
    { id: 17, name: "Травяной чай", price: 85, image: teaIcon },
  ],
};

export const testOrders = [
  {
    id: "1",
    orderNumber: "M-1",
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
    customerName: "Иван",
    items: [
      { ...menuItems.cocktails[0], quantity: 1 },
      { ...menuItems.coffee[3], quantity: 1 },
    ],
    status: "completed",
  },
];
