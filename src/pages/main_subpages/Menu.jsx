import React, { useState } from "react";
import MenuCard from "../../components/MenuCard";
import coffeeIcon from "../../images/coffee-icon.svg";
import bakeryIcon from "../../images/bakery-icon.svg";
import dessertsIcon from "../../images/desserts-icon.svg";
import coctailsIcon from "../../images/coctails-icon.svg";
import teaIcon from "../../images/tea-icon.svg";
// import cartIcon from "../../images/cart-icon.svg"; // Assuming you have a cart icon
import "../../styles/pages/main_subpages/menu_page.css";

// Test data for menu items
const menuItems = {
  coffee: [
    { id: 1, name: "Эспрессо 1", price: 100, image: coffeeIcon },
    { id: 2, name: "Американо 2", price: 120, image: coffeeIcon },
    { id: 3, name: "Капучино 3", price: 150, image: coffeeIcon },
    { id: 1, name: "Эспрессо 1", price: 100, image: coffeeIcon },
    { id: 2, name: "Американо 2", price: 120, image: coffeeIcon },
    { id: 3, name: "Капучино 3", price: 150, image: coffeeIcon },
    { id: 1, name: "Эспрессо 1", price: 100, image: coffeeIcon },
    { id: 2, name: "Американо 2", price: 120, image: coffeeIcon },
    { id: 3, name: "Капучино 3", price: 150, image: coffeeIcon },
    { id: 1, name: "Эспрессо 1", price: 100, image: coffeeIcon },
    { id: 2, name: "Американо 2", price: 120, image: coffeeIcon },
    { id: 3, name: "Капучино 3", price: 150, image: coffeeIcon },
    { id: 1, name: "Эспрессо 1", price: 100, image: coffeeIcon },
    { id: 2, name: "Американо 2", price: 120, image: coffeeIcon },
    { id: 3, name: "Капучино 3", price: 150, image: coffeeIcon },

    // ... other coffee items
  ],
  desserts: [
    { id: 14, name: "Тирамису", price: 150, image: dessertsIcon },
    { id: 15, name: "Чизкейк", price: 170, image: dessertsIcon },
    // ... other dessert items
  ],
  pastries: [
    { id: 16, name: "Круассан", price: 80, image: bakeryIcon },
    { id: 17, name: "Датский пирог", price: 90, image: bakeryIcon },
    // ... other pastries items
  ],
  cocktails: [
    { id: 18, name: "Мохито", price: 180, image: coctailsIcon },
    { id: 19, name: "Мартини", price: 200, image: coctailsIcon },
    // ... other cocktails
  ],
  tea: [
    { id: 20, name: "Зеленый чай", price: 80, image: teaIcon },
    { id: 21, name: "Черный чай", price: 80, image: teaIcon },
    // ... other tea items
  ],
};

const categories = [
  { key: "coffee", text: "Кофе", icon: coffeeIcon },
  { key: "desserts", text: "Десерты", icon: dessertsIcon },
  { key: "pastries", text: "Выпечка", icon: bakeryIcon },
  { key: "cocktails", text: "Коктейли", icon: coctailsIcon },
  { key: "tea", text: "Чай", icon: teaIcon },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (item) => {
    // Implement add to cart functionality
    setCart([...cart, item]);
  };

  const renderMenuCards = (category) => {
    return menuItems[category].map((item) => (
      <MenuCard
        key={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        onAdd={() => addToCart(item)}
      />
    ));
  };

  const renderCategoryContent = () => {
    return (
      <div className="menu-cards-container">
        {renderMenuCards(activeCategory)}
      </div>
    );
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h3 className="menu-header-title">Меню</h3>
      </div>
      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`category-button ${
              activeCategory === category.key ? "active" : ""
            }`}
          >
            <img
              src={category.icon}
              alt={category.text}
              className="category-icon"
            />
            {category.text}
          </button>
        ))}
      </div>
      <div className="menu-content">
        {renderCategoryContent()}
        <button className="cart-icon-button">
          Заказ на вынос {totalPrice} сом
        </button>
      </div>
    </div>
  );
};

export default Menu;
