import React, { useState, useEffect } from "react";
import MenuCard from "../../components/MenuCard";
import CartWindow from "../../components/CartWindow";
import MenuDetailModal from "../../components/MenuDetailModal";
import { menuItems } from "../../common";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  setItems,
  clearTempItems,
  saveTempItems,
} from "../../store/cartSlice";
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
  const tempItems = useSelector((state) => state.cart.tempItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [showCartWindow, setShowCartWindow] = useState(false);
  const editingOrder = useSelector((state) => state.order.editingOrder);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const [wasCartInitiallyEmpty, setWasCartInitiallyEmpty] = useState(false);
  const [tempTotalAmount, setTempTotalAmount] = useState(0);
  const orderAccepted = useSelector((state) => state.order.orderAccepted);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const addToCart = (item) => {
    if (editingOrder && Array.isArray(editingOrder.items)) {
      const existingItemIndex = editingOrder.items.findIndex(
        (i) => i.id === item.id
      );
      let updatedItems;

      if (existingItemIndex >= 0) {
        updatedItems = editingOrder.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...editingOrder.items, { ...item, quantity: 1 }];
      }

      dispatch(
        updateOrder({
          orderId: editingOrder.id,
          newOrderData: { ...editingOrder, items: updatedItems },
        })
      );
    } else {
      dispatch(addItem(item));
    }
  };

  const openMenuDetail = (item) => {
    setSelectedMenuItem(item);
  };

  const closeMenuDetail = () => {
    setSelectedMenuItem(null);
  };

  const toggleCartWindow = () => {
    setShowCartWindow(!showCartWindow);

    if (!showCartWindow) {
      setWasCartInitiallyEmpty(tempItems.length === 0);

      if (selectedOrder) {
        dispatch(setEditingOrder(selectedOrder));
        dispatch(setItems(selectedOrder.items));
      } else if (cart.length > 0 && tempItems.length > 0) {
        dispatch(setItems(tempItems));
        dispatch(clearTempItems());
      }
    } else {
      if (!selectedOrder && cart.length > 0) {
        dispatch(saveTempItems(cart));
      }
      dispatch(setEditingOrder(null));
    }
  };

  const renderMenuCards = (categoryKey) => {
    return menuItems[categoryKey].map((item) => (
      <MenuCard
        key={item.id}
        name={item.name}
        price={item.price}
        image={item.image}
        onAdd={() => addToCart(item)}
        onClick={() => openMenuDetail(item)}
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

  useEffect(() => {
    if (!selectedOrder && !editingOrder && tempItems.length > 0) {
      dispatch(setItems(tempItems));
      dispatch(clearTempItems());
    } else if (editingOrder && tempItems.length > 0) {
      dispatch(setItems([]));
    }

    if (editingOrder && wasCartInitiallyEmpty) {
      dispatch(setItems([]));
    }

    if (!showCartWindow && !selectedOrder) {
      dispatch(setEditingOrder(null));
    }

    if (editingOrder) {
      const editingOrderTotal = editingOrder.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTempTotalAmount(editingOrderTotal);
    }
  }, [
    selectedOrder,
    editingOrder,
    tempItems,
    showCartWindow,
    orderAccepted,
    dispatch,
  ]);

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
          Заказ на вынос{" "}
          <span className="total-price">
            {editingOrder ? tempTotalAmount : totalAmount} сом
          </span>
        </button>
        {showCartWindow && (
          <CartWindow onClose={() => setShowCartWindow(false)} />
        )}
        {selectedMenuItem && (
          <MenuDetailModal
            item={selectedMenuItem}
            onClose={closeMenuDetail}
            onAdd={addToCart}
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
