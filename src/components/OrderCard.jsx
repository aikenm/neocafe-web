import React from "react";
import "../styles/components/OrderCard.css";
import cancelIcon from "../images/cancelIcon.svg";

const OrderCard = ({ orderNumber, customerName, items, status }) => {
  const renderActionButton = () => {
    switch (status) {
      case "new":
        return <button className="order-button accept">Принять</button>;
      case "inProgress":
        return <button className="order-button finish">Завершить</button>;
      default:
        return (
          <div className={`status-text ${status}`}>{statusTextMap[status]}</div>
        );
    }
  };

  const statusTextMap = {
    cancelled: "Заказ отменен",
    completed: "Заказ завершен",
  };

  return (
    <div className="order-card">
      {status === "new" && (
        <button className="cancel-button">
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
