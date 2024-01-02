import React from "react";
import "../styles/components/OrderCard.css";
import cancelIcon from "../images/cancelIcon.svg";

const OrderCard = ({ orderName, customerName, items, status }) => {
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
    ready: "Готово",
    cancelled: "Отменено",
    completed: "Завершено",
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
          <div className="order-name">{orderName}</div>
          <div className="customer-name">{customerName}</div>
        </div>
        <ul className="order-items">
          {items.slice(0, 3).map((item, index) => (
            <li key={index}>{`x${item.quantity} ${item.name}`}</li>
          ))}
          {items.length > 3 && <li>Еще +{items.length - 3}</li>}
        </ul>
      </div>
      {renderActionButton()}
    </div>
  );
};

export default OrderCard;
