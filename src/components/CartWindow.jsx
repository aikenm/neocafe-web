import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { setItems } from "../store/cartSlice";
import {
  updateOrder,
  removeOrderItem,
  addOrder,
  setEditingOrder,
} from "../store/orderSlice";

import "../styles/components/CartWindow.css";
import closeIcon from "../images/cancelIcon.svg";
import emptyCartImage from "../images/empty-cart.svg";

const CartWindow = ({ order, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const editingOrder = useSelector((state) => state.order.editingOrder); // Retrieve editingOrder
  const personalData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemsToShow = editingOrder
    ? editingOrder.items
    : selectedOrder
    ? selectedOrder.items
    : cartItems || [];

  const totalAmount = itemsToShow.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const isOrderNew = editingOrder
    ? editingOrder.status === "new"
    : selectedOrder
    ? selectedOrder.status === "new"
    : true;

  const cartRef = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

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
    if (newQuantity < 1) return;

    const updatedItems = itemsToShow.map((item) =>
      item.id === updatedItem.id ? { ...item, quantity: newQuantity } : item
    );

    dispatch(setItems(updatedItems));

    if (selectedOrder) {
      const updatedOrder = { ...selectedOrder, items: updatedItems };
      dispatch(
        updateOrder({ orderId: selectedOrder.id, newOrderData: updatedOrder })
      );
    }
  };

  const handleDeleteItem = (itemId) => {
    if (selectedOrder) {
      const updatedItems = selectedOrder.items.filter(
        (item) => item.id !== itemId
      );
      dispatch(
        updateOrder({
          orderId: selectedOrder.id,
          newOrderData: { ...selectedOrder, items: updatedItems },
        })
      );
      dispatch(setItems(updatedItems)); // Update the cart as well
    } else {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      dispatch(setItems(updatedCartItems));
    }
  };

  const handleAddMoreItems = () => {
    // Set the current order as editable
    dispatch(setEditingOrder(selectedOrder.id));
    // Navigate to the menu page
    navigate("/main/menu");
  };

  const handleOrderAction = () => {
    if (!selectedOrder && !editingOrder) {
      // Logic for creating a new order
      const newOrder = {
        id: "Unique ID", // Generate a unique ID for the new order
        orderNumber: "M-X", // Assign a new order number
        orderType: "takeaway",
        customerName: personalData.phone,
        items: [...cartItems], // Add items from the cart
        status: "new",
      };
      dispatch(addOrder(newOrder));
      dispatch(setItems([]));
      navigate("/main/orders");
      onClose();
    } else {
      // Update the existing order (either selectedOrder or editingOrder)
      const orderToUpdate = editingOrder || selectedOrder;
      const updatedStatus = isOrderNew
        ? "inProgress"
        : orderToUpdate.status === "ready"
        ? "completed"
        : orderToUpdate.status;
      dispatch(
        updateOrder({
          orderId: orderToUpdate.id,
          newOrderData: {
            ...orderToUpdate,
            items: itemsToShow,
            status: updatedStatus,
          },
        })
      );
      if (updatedStatus !== orderToUpdate.status) {
        navigate("/main/orders");
      }
    }
    onClose();
  };

  const isActionButtonDisabled =
    selectedOrder &&
    selectedOrder.status !== "ready" &&
    selectedOrder.status !== "new";

  const actionButtonText = !selectedOrder
    ? "Заказать"
    : selectedOrder.status === "new"
    ? "Принять"
    : selectedOrder.status === "ready"
    ? "Завершить заказ"
    : selectedOrder.status === "cancelled"
    ? "Заказ отменен"
    : selectedOrder.status === "completed"
    ? "Заказ закрыт"
    : "Завершить заказ";

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="cart-window" ref={cartRef}>
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
        {itemsToShow.length === 0 ? (
          <div className="cart-empty">
            <p className="empty-cart-text">Вы еще ничего не добавили</p>
            <img
              src={emptyCartImage}
              alt="Empty Cart"
              className="empty-cart-icon"
            />
          </div>
        ) : (
          itemsToShow.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              selectedOrder={selectedOrder}
              isOrderNew={isOrderNew}
              onQuantityChange={handleQuantityChange}
              onDeleteItem={() => handleDeleteItem(item.id)}
            />
          ))
        )}
        {isOrderNew && itemsToShow.length < 3 && (
          <button className="cart-add-button" onClick={handleAddMoreItems}>
            Добавить
          </button>
        )}
      </div>
      {isOrderNew && itemsToShow.length >= 3 && (
        <button
          className="cart-add-button fixed-position"
          onClick={handleAddMoreItems}
        >
          Добавить
        </button>
      )}
      <div className="cart-total-amount">
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className="cart-action-button-wrapper">
        <button
          onClick={handleOrderAction}
          className="cart-action-button"
          disabled={isActionButtonDisabled}
        >
          {actionButtonText}
        </button>
      </div>
    </div>
  );
};

export default CartWindow;
