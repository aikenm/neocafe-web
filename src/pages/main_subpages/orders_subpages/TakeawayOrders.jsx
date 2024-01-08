import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCard from "../../../components/OrderCard";
import newOrdersIcon from "../../../images/new_orders.svg";
import inProgressOrdersIcon from "../../../images/in-progress_orders.svg";
import cancelledOrdersIcon from "../../../images/cancelled_orders.svg";
import completeOrdersIcon from "../../../images/complete_orders.svg";
import "../../../styles/pages/main_subpages/orders_page.css";

const orderStatuses = [
  { key: "new", text: "Новый", icon: newOrdersIcon },
  { key: "inProgress", text: "В процессе", icon: inProgressOrdersIcon },
  { key: "cancelled", text: "Отменено", icon: cancelledOrdersIcon },
  { key: "completed", text: "Завершено", icon: completeOrdersIcon },
];

const testOrders = [
  {
    id: "1",
    orderNumber: "M-47 1",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "ready",
  },
  {
    id: "2",
    orderNumber: "M-47 2",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 2 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "cancelled",
  },
  {
    id: "3",
    orderNumber: "M-47 3",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "4",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "5",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },

  {
    id: "6",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "6",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "ready",
  },
  {
    id: "7",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "cancelled",
  },
  {
    id: "8",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "9",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "10",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },

  {
    id: "11",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "12",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "ready",
  },
  {
    id: "13",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "cancelled",
  },
  {
    id: "14",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "15",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "16",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },

  {
    id: "17",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "18",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "ready",
  },
  {
    id: "19",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "cancelled",
  },
  {
    id: "20",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "completed",
  },
  {
    id: "21",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
  {
    id: "22",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },

  {
    id: "23",
    orderNumber: "M-47",
    customerName: "Валентина",
    items: [
      { name: "Капучино", quantity: 1 },
      { name: "Барровый закат", quantity: 1 },
      { name: "Мохито Клубничный", quantity: 1 },
    ],
    status: "new",
  },
];

const TakeawayOrders = () => {
  const [activeStatus, setActiveStatus] = useState(orderStatuses[0].key);
  const [orders, setOrders] = useState(testOrders);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `/api/takeaway-orders?status=${activeStatus}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching takeaway orders", error);
      }
    };

    fetchOrders();
  }, [activeStatus]);

  const filteredOrders = orders.filter(
    (order) => order.status === activeStatus
  );

  const renderOrdersContent = () => {
    return (
      <div className={`order-cards-container status-${activeStatus}`}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              orderNumber={order.orderNumber}
              customerName={order.customerName}
              items={order.items}
              status={order.status}
            />
          ))
        ) : (
          <p>No orders found for {activeStatus}</p>
        )}
      </div>
    );
  };

  return (
    <div className="takeaway-orders-page">
      <div className="orders-status-header">
        {orderStatuses.map((status) => (
          <button
            key={status.key}
            onClick={() => setActiveStatus(status.key)}
            className={`status-button ${
              activeStatus === status.key ? "active" : ""
            }`}
          >
            <img src={status.icon} alt={status.text} className="status-icon" />
            {status.text}
          </button>
        ))}
      </div>
      {renderOrdersContent()}
    </div>
  );
};

export default TakeawayOrders;
