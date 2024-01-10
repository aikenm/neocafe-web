import React, { useState, useEffect } from "react";
import MenuCard from "../../components/MenuCard";
import CartWindow from "../../components/CartWindow";
import { menuItems } from "../../common";
import { useSelector, useDispatch } from "react-redux";
import { addItem, setItems } from "../../store/cartSlice";
import "../../styles/pages/main_subpages/menu_page.css";
import coffeeIcon from "../../images/coffee-icon.svg";
import bakeryIcon from "../../images/bakery-icon.svg";
import dessertsIcon from "../../images/desserts-icon.svg";
import coctailsIcon from "../../images/coctails-icon.svg";
import teaIcon from "../../images/tea-icon.svg";
import { setEditingOrder, updateOrder } from "../../store/orderSlice";

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
  const editingOrder = useSelector((state) => state.order.editingOrder);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);

  const addToCart = (item) => {
    if (editingOrder) {
      // Check if the item already exists in the editing order
      const existingItemIndex = editingOrder.items.findIndex(
        (i) => i.id === item.id
      );
      let updatedItems;

      if (existingItemIndex > -1) {
        // If the item exists, update its quantity
        updatedItems = editingOrder.items.map((i, index) =>
          index === existingItemIndex ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If the item doesn't exist, add it to the editing order
        updatedItems = [...editingOrder.items, { ...item, quantity: 1 }];
      }

      // Update the editing order in the Redux store
      dispatch(
        updateOrder({
          orderId: editingOrder.id,
          newOrderData: { ...editingOrder, items: updatedItems },
        })
      );

      // Update the cart items in the Redux store
      dispatch(setItems(updatedItems));
    } else {
      // Regular logic to add an item to the cart
      dispatch(addItem(item));
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const toggleCartWindow = () => {
    setShowCartWindow(!showCartWindow);
    if (!showCartWindow && selectedOrder) {
      // Update the cart with the selected order's items when opening the cart window
      dispatch(setItems(selectedOrder.items));
      dispatch(setEditingOrder(selectedOrder.id));
    }
  };

  // Reset editing order when cart window is closed or order is completed
  useEffect(() => {
    if (!showCartWindow) {
      dispatch(setEditingOrder(null));
    }
  }, [showCartWindow, dispatch]);

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
