import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrder,
  setEditingOrder,
  clearSelectedOrder,
  updateOrder,
} from "../../../store/orderSlice";
import {
  setItems,
  saveTempItems,
  clearTempItems,
} from "../../../store/cartSlice";
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
  const cartItems = useSelector((state) => state.cart.items); // Add this line
  const editingOrder = useSelector((state) => state.order.editingOrder); // Add this line
  const tempItems = useSelector((state) => state.cart.tempItems);
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const [activeStatus, setActiveStatus] = useState(orderStatuses[0].key);

  const handleOrderSelect = (order) => {
    if (cartItems.length > 0 && !editingOrder) {
      dispatch(saveTempItems(cartItems));
    }
    dispatch(selectOrder(order));
    dispatch(setEditingOrder(order));
    dispatch(setItems(order.items));
  };

  const handleCloseCart = () => {
    dispatch(clearSelectedOrder());
    if (tempItems.length > 0) {
      dispatch(setItems(tempItems));
      dispatch(clearTempItems());
    } else if (tempItems.length === 0) {
      dispatch(setItems([]));
    }
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
          <span className="not-found-orders">Нет заказов</span>
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
