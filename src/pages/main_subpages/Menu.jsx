import React, { useState } from "react";
import MenuCard from "../../components/MenuCard";
import CartWindow from "../../components/CartWindow";
import { menuItems } from "../../common";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import "../../styles/pages/main_subpages/menu_page.css";
import coffeeIcon from "../../images/coffee-icon.svg";
import bakeryIcon from "../../images/bakery-icon.svg";
import dessertsIcon from "../../images/desserts-icon.svg";
import coctailsIcon from "../../images/coctails-icon.svg";
import teaIcon from "../../images/tea-icon.svg";

const categories = [
  { key: "coffee", text: "Кофе", icon: coffeeIcon },
  { key: "desserts", text: "Десерты", icon: dessertsIcon },
  { key: "pastries", text: "Выпечка", icon: bakeryIcon },
  { key: "cocktails", text: "Коктейли", icon: coctailsIcon },
  { key: "tea", text: "Чай", icon: teaIcon },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [showCartWindow, setShowCartWindow] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const toggleCartWindow = () => {
    setShowCartWindow(!showCartWindow);
  };

  const renderMenuCards = (categoryKey) => {
    return menuItems[categoryKey].map((item) => (
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
        <button className="cart-button" onClick={toggleCartWindow}>
          Заказ на вынос <span className="total-price">{totalPrice} сом</span>
        </button>
        {showCartWindow && (
          <CartWindow onClose={() => setShowCartWindow(false)} />
        )}
      </div>
    </div>
  );
};

export default Menu;
