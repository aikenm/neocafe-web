import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrder,
  clearSelectedOrder,
  setOrders,
} from "../../../store/orderSlice";
import coffeeIcon from "../../../images/coffee-icon.svg";
import OrderCard from "../../../components/OrderCard";
import CartWindow from "../../../components/CartWindow";
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
    orderNumber: "M-1",
    customerName: "Валентина",
    items: [
      { id: 1, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
    ],
    status: "inProgress",
  },
  {
    id: "2",
    orderNumber: "M-2",
    customerName: "Валентина",
    items: [
      { id: 1, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
    ],
    status: "new",
  },

  {
    id: "3",
    orderNumber: "M-3",
    customerName: "Валентина",
    items: [
      { id: 1, image: coffeeIcon, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
    ],
    status: "new",
  },
  {
    id: "4",
    orderNumber: "M-4",
    customerName: "Валентина",
    items: [
      { id: 1, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
    ],
    status: "new",
  },
  {
    id: "5",
    orderNumber: "M-5",
    customerName: "Валентина",
    items: [
      { id: 1, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
    ],
    status: "new",
  },
  {
    id: "6",
    orderNumber: "M-6",
    orderType: "inhouse",
    customerName: "Валентина",
    items: [
      { id: 1, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
      { id: 1, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
      { id: 1, name: "Капучино", quantity: 1, price: 140 },
      { id: 2, name: "Барровый закат", quantity: 1, price: 140 },
      { id: 3, name: "Мохито Клубничный", quantity: 1, price: 140 },
    ],
    status: "new",
  },
];

const TakeawayOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const [activeStatus, setActiveStatus] = useState(orderStatuses[0].key);

  const handleOrderSelect = (order) => {
    dispatch(selectOrder(order));
  };

  const handleCloseCart = () => {
    dispatch(clearSelectedOrder());
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `/api/takeaway-orders?status=${activeStatus}`
        );
        dispatch(setOrders(response.data));
      } catch (error) {
        console.error("Error fetching takeaway orders", error);
      }
    };

    if (activeStatus === "new") {
      dispatch(setOrders(testOrders));
    } else {
      fetchOrders();
    }
  }, [activeStatus, dispatch]);

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
              order={order}
              onSelect={handleOrderSelect}
            />
          ))
        ) : (
          <p>No orders found for {activeStatus}</p>
        )}
        {selectedOrder && (
          <CartWindow order={selectedOrder} onClose={handleCloseCart} />
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
