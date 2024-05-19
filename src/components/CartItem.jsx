import React, { useState, useEffect } from "react";
import "../styles/components/CartItem.css";
import plusIcon from "../images/add-icon.svg";
import minusIcon from "../images/minus-icon.svg";
import trashIcon from "../images/trash-icon.svg";

const CartItem = ({ item, isOrderNew, onQuantityChange, onDeleteItem }) => {
  const [deleteStates, setDeleteStates] = useState(new Map());

  useEffect(() => {
    setDeleteStates((prevStates) => new Map(prevStates.set(item.id, false)));
  }, [item.id, item]);

  const toggleDelete = (itemId) => {
    setDeleteStates(
      (prevStates) => new Map(prevStates.set(itemId, !prevStates.get(itemId)))
    );
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    onQuantityChange(item, item.quantity + 1);
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    if (item.quantity > 1) {
      onQuantityChange(item, item.quantity - 1);
    }
  };

  const showDelete = deleteStates.get(item.id);

  return (
    <div
      className={`cart-item ${showDelete ? "show-delete" : ""}`}
      onClick={isOrderNew ? () => toggleDelete(item.id) : undefined}
    >
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-quantity-wrapper">
          {isOrderNew ? (
            <>
              <div className="cart-item-price">{item.price} с</div>
              <div className="cart-item-quantity-block">
                <button onClick={handleDecrease} className="quantity-decrease">
                  <img src={minusIcon} alt="Decrease" className="minus-icon" />
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button onClick={handleIncrease} className="quantity-increase">
                  <img src={plusIcon} alt="Increase" className="plus-icon" />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="cart-item-price">
                {item.price * item.quantity} с
              </div>
              <div className="cart-item-non-new">x {item.quantity}</div>
            </>
          )}
        </div>
        {isOrderNew && showDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteItem();
            }}
            className="cart-item-delete"
          >
            <img src={trashIcon} alt="Delete" className="trash-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
