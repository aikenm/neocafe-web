import React from "react";
import "../styles/components/OrderCard.css";
import cancelIcon from "../images/cancelIcon.svg";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../store/orderSlice";

const OrderCard = ({ order, onSelect }) => {
  const dispatch = useDispatch();
  if (!order) return null;

  const { id, orderNumber, customerName, items, status } = order;

  const handleAccept = (e) => {
    e.stopPropagation();
    dispatch(updateOrderStatus({ orderId: id, newStatus: "inProgress" }));
  };

  const handleFinish = (e) => {
    e.stopPropagation();
    dispatch(updateOrderStatus({ orderId: id, newStatus: "ready" }));
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    dispatch(updateOrderStatus({ orderId: id, newStatus: "cancelled" }));
  };

  const renderActionButton = () => {
    switch (status) {
      case "new":
        return (
          <button className="order-button accept" onClick={handleAccept}>
            Принять
          </button>
        );
      case "inProgress":
        return (
          <button className="order-button finish" onClick={handleFinish}>
            Готов
          </button>
        );
      default:
        return (
          <div className={`status-text ${status}`}>{statusTextMap[status]}</div>
        );
    }
  };

  const statusTextMap = {
    ready: "Заказ готов",
    cancelled: "Заказ отменен",
    completed: "Заказ завершен",
  };

  return (
    <div className="order-card" onClick={() => onSelect(order)}>
      {status === "new" && (
        <button className="cancel-button" onClick={handleCancel}>
          <img src={cancelIcon} alt="Cancel Order" />
        </button>
      )}
      <div className="order-info">
        <div className="order-header">
          <div className="order-number">{orderNumber}</div>
          <div className="customer-name">{customerName}</div>
        </div>
        <div className="order-items">
          {items.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="order-item"
            >{`x${item.quantity} ${item.name}`}</span>
          ))}
          {items.length > 3 && (
            <span className="extra-items">Еще +{items.length - 3}</span>
          )}
        </div>
      </div>
      <div className="button-wrapper">{renderActionButton()}</div>
    </div>
  );
};

export default OrderCard;
