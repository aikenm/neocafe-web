import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrder,
  clearSelectedOrder,
  updateOrder,
} from "../../../store/orderSlice";
import { setItems } from "../../../store/cartSlice";
import OrderCard from "../../../components/OrderCard";
import CartWindow from "../../../components/CartWindow";
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

const TakeawayOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const [activeStatus, setActiveStatus] = useState(orderStatuses[0].key);

  const handleOrderSelect = (order) => {
    dispatch(selectOrder(order));
    dispatch(setItems(order.items));
  };

  const handleCloseCart = () => {
    dispatch(clearSelectedOrder());
  };

  const handleEditOrder = (orderId, updatedOrderData) => {
    dispatch(updateOrder({ orderId, newOrderData: updatedOrderData }));
  };

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
              onEdit={handleEditOrder}
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
