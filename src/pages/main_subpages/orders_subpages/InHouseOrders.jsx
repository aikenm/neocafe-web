import React, { useState, useEffect } from "react";
import axios from "axios";
import newOrdersIcon from "../../../images/new_orders.svg";
import inProgressOrdersIcon from "../../../images/in-progress_orders.svg";
import readyOrdersIcon from "../../../images/ready_orders.svg";
import cancelledOrdersIcon from "../../../images/cancelled_orders.svg";
import completeOrdersIcon from "../../../images/complete_orders.svg";
import "../../../styles/pages/main_subpages/orders_page.css";
const orderStatuses = [
  { key: "new", text: "Новый", icon: newOrdersIcon },
  { key: "inProgress", text: "В процессе", icon: inProgressOrdersIcon },
  { key: "ready", text: "Готово", icon: readyOrdersIcon },
  { key: "cancelled", text: "Отменено", icon: cancelledOrdersIcon },
  { key: "completed", text: "Завершено", icon: completeOrdersIcon },
];

const InHouseOrders = () => {
  const [activeStatus, setActiveStatus] = useState(orderStatuses[0].key);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async (status) => {
      try {
        const response = await axios.get(`/api/orders/${status}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    fetchOrders(activeStatus);
  }, [activeStatus]);

  const renderOrdersContent = () => {
    return (
      <div className={`orders-content status-${activeStatus}`}>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id}>{/* Render your order details */}</div>
          ))
        ) : (
          <p>No orders found for {activeStatus}</p>
        )}
      </div>
    );
  };

  return (
    <div className="orders-page">
      <div className="orders-content-wrapper">
        <div className="orders-status-header">
          {orderStatuses.map((status) => (
            <button
              key={status.key}
              onClick={() => setActiveStatus(status.key)}
              className={`status-button ${
                activeStatus === status.key ? "active" : ""
              }`}
            >
              <img
                src={status.icon}
                alt={status.text}
                className="status-icon"
              />
              {status.text}
            </button>
          ))}
        </div>
        {renderOrdersContent()}
      </div>
    </div>
  );
};

export default InHouseOrders;
