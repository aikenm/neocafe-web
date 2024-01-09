import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import "../styles/components/CartWindow.css";
import closeIcon from "../images/cancelIcon.svg";
import { setItems } from "../store/cartSlice";

const CartWindow = ({ order, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemsToShow = order ? order.items : cartItems;
  const isOrderNew = order ? order.status === "new" : true;

  if (!itemsToShow || itemsToShow.length === 0) {
    return <div className="cart-window-empty">Your cart is empty.</div>;
  }

  const getTitle = () => {
    if (order) {
      switch (order.orderType) {
        case "takeaway":
          return "Заказ на вынос";
        case "inhouse":
          return "Заказ в заведении";
        default:
          return "Заказ";
      }
    }
    return "Ваш заказ";
  };

  const handleQuantityChange = (updatedItem, newQuantity) => {
    const updatedItems = [...itemsToShow]; // Create a copy of itemsToShow
    const index = updatedItems.findIndex((item) => item.id === updatedItem.id);

    if (index !== -1) {
      updatedItems[index] = { ...updatedItem, quantity: newQuantity }; // Update the quantity of the item in the copy
      // Update the cart state with the updated items using setItems action
      dispatch(setItems(updatedItems));
    }
  };

  const totalAmount = itemsToShow.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-window">
      <div className="cart-header">
        <button onClick={onClose} className="cart-close-button">
          <img src={closeIcon} alt="Close" className="close-icon" />
        </button>
        <h2 className="cart-title">{getTitle()}</h2>
      </div>
      <div className="cart-order-info">
        {order && (
          <>
            <span className="cart-order-number">{order.orderNumber}</span>
            <span className="cart-order-client">{order.customerName}</span>
          </>
        )}
      </div>
      <div className="cart-items-container">
        {itemsToShow.map((item, index) => (
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
        <button
          onClick={() => console.log("Order processing...")}
          className="cart-action-button"
        >
          {isOrderNew ? "Принять" : "Завершить заказ"}
        </button>
      </div>
    </div>
  );
};

export default CartWindow;
