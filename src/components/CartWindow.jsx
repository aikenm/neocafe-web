import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../styles/components/CartWindow.css";
import closeIcon from "../images/cancelIcon.svg";

const CartWindow = ({ order, onClose }) => {
  const [orderItems, setOrderItems] = useState(order ? order.items : []);

  useEffect(() => {
    if (order) {
      setOrderItems(order.items);
    }
  }, [order]);

  if (!order) {
    return null;
  }

  const isOrderNew = order.status === "new";

  const getTitle = () => {
    switch (order.orderType) {
      case "takeaway":
        return "Заказ на вынос";
      case "inhouse":
        return "Заказ в заведении";
      default:
        return "Заказ";
    }
  };

  const handleAccept = () => {
    console.log("Order accepted");
  };

  const handleQuantityChange = (updatedItem, newQuantity) => {
    const updatedItems = orderItems.map((item) => {
      if (item.id === updatedItem.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setOrderItems(updatedItems);
  };

  const totalAmount = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-window">
      <div className="cart-header">
        <button onClick={onClose} className="cart-close-button">
          <img src={closeIcon} alt="" className="close-icon" />
        </button>
        <h2 className="cart-title">{getTitle()}</h2>
      </div>
      <div className="cart-order-info">
        <span className="cart-order-number">{order.orderNumber}</span>
        <span className="cart-order-client">{order.customerName}</span>
      </div>
      <div className="cart-items-container">
        {orderItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            isOrderNew={isOrderNew}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      {isOrderNew && <button className="cart-add-button">Добавить</button>}
      <div className="cart-total-amount">
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className="cart-action-button-wrapper">
        <button onClick={handleAccept} className="cart-action-button">
          {isOrderNew ? "Принять" : "Завершить заказ"}
        </button>
      </div>
    </div>
  );
};

export default CartWindow;
