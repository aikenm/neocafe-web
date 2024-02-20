import React, { useEffect, useRef, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { setItems, saveTempItems, clearTempItems } from "../store/cartSlice";
import {
  updateOrder,
  clearSelectedOrder,
  addOrder,
  setEditingOrder,
  setOrderAccepted,
} from "../store/orderSlice";
import "../styles/components/CartWindow.css";
import closeIcon from "../images/cancelIcon.svg";
import emptyCartImage from "../images/empty-cart.svg";

const CartWindow = ({ order, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const tempItems = useSelector((state) => state.cart.tempItems);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const editingOrder = useSelector((state) => state.order.editingOrder);
  const [orderEdited, setOrderEdited] = useState(false);
  const [isAddingToOrder, setIsAddingToOrder] = useState(false);

  const personalData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemsToShow =
    (editingOrder ? editingOrder.items : null) ||
    (selectedOrder ? selectedOrder.items : null) ||
    cartItems ||
    [];

  const areNoItemsToShow = itemsToShow.length === 0;

  const totalAmount = itemsToShow.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const isOrderNew = order ? order.status === "new" : true;
  const showAddButton =
    selectedOrder && selectedOrder.status === "new" && !isAddingToOrder;

  const cartRef = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleNavigateAway = () => {
    if (cartItems.length > 0 && !selectedOrder && !editingOrder) {
      dispatch(saveTempItems(cartItems));
    }
  };

  const getTitle = () => {
    if (editingOrder) {
      let title = "";
      switch (editingOrder.orderType) {
        case "takeaway":
          title = "Заказ на вынос";
          break;
        case "inhouse":
          title = "Заказ в заведении";
          break;
        default:
          title = "Заказ";
      }
      if (editingOrder.orderNumber) {
        title += ` (${editingOrder.orderNumber})`;
      }
      return title;
    }

    if (order) {
      let title = "";
      switch (order.orderType) {
        case "takeaway":
          title = "Заказ на вынос";
          break;
        case "inhouse":
          title = "Заказ в заведении";
          break;
        default:
          title = "Заказ";
      }
      if (order.orderNumber) {
        title += ` (${order.orderNumber})`;
      }
      return title;
    }

    return "Новый заказ";
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
      if (editingOrder && editingOrder.id === selectedOrder.id) {
        dispatch(setItems(updatedItems));
      }
    } else {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      dispatch(setItems(updatedCartItems));
    }
  };

  const handleAddMoreItems = () => {
    setIsAddingToOrder(true);
    dispatch(setEditingOrder(selectedOrder));
    setOrderEdited(true);
    navigate("/main/menu");
  };

  const handleOrderAction = () => {
    if (!selectedOrder) {
      const newOrder = {
        id: `order-${Date.now()}`,
        orderNumber: "M-X",
        orderType: "takeaway",
        customerName: personalData.phone,
        items: [...cartItems],
        status: "new",
      };
      dispatch(addOrder(newOrder));
      dispatch(clearTempItems());
      dispatch(setItems([]));
      navigate("/main/orders");
    } else {
      const nextStatus =
        selectedOrder.status === "new"
          ? "inProgress"
          : selectedOrder.status === "ready"
          ? "completed"
          : selectedOrder.status;

      const updatedOrder = {
        ...selectedOrder,
        items: editingOrder ? editingOrder.items : selectedOrder.items,
        status: nextStatus,
      };

      dispatch(
        updateOrder({ orderId: selectedOrder.id, newOrderData: updatedOrder })
      );

      if (orderEdited) {
        dispatch(setItems([]));
      }

      onClose();
      dispatch(clearSelectedOrder());
      dispatch(setEditingOrder(null));

      if (tempItems.length > 0) {
        dispatch(setItems(tempItems));
        dispatch(clearTempItems());
      } else {
        dispatch(setItems([]));
      }
      navigate(`/main/orders/${nextStatus}`);
    }
  };

  const isActionButtonDisabled =
    (selectedOrder &&
      selectedOrder.status !== "ready" &&
      selectedOrder.status !== "new") ||
    areNoItemsToShow;

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

  useEffect(() => {
    setIsAddingToOrder(false);
    dispatch(setOrderAccepted(false));
  }, [dispatch]);

  return (
    <div className="cart-window" ref={cartRef}>
      <div className="cart-header">
        <button
          onClick={() => {
            handleNavigateAway();
            onClose();
          }}
          className="cart-close-button"
        >
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
        {showAddButton && itemsToShow.length < 3 && (
          <button className="cart-add-button" onClick={handleAddMoreItems}>
            Добавить
          </button>
        )}
      </div>
      {showAddButton && itemsToShow.length >= 3 && (
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
