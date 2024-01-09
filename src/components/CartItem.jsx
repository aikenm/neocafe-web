import React, { useState, useEffect } from "react";
import "../styles/components/CartItem.css";
import plusIcon from "../images/add-icon.svg";
import minusIcon from "../images/minus-icon.svg";
import trashIcon from "../images/trash-icon.svg";

const CartItem = ({ item, isOrderNew, onQuantityChange }) => {
  const [showDelete, setShowDelete] = useState(false);

  const toggleDelete = () => {
    setShowDelete(!showDelete);
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    onQuantityChange(item, item.quantity + 1);
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    if (item.quantity > 0) {
      onQuantityChange(item, item.quantity - 1);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    // Logic to delete the item
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDelete && !event.target.closest(".cart-item")) {
        setShowDelete(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDelete]);

  return (
    <div
      className={`cart-item ${showDelete ? "show-delete" : ""}`}
      onClick={toggleDelete}
    >
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-quantity-wrapper">
          <div className="cart-item-price">{item.price} с</div>
          <div className="cart-item-quantity-block">
            {isOrderNew && (
              <>
                <button onClick={handleDecrease} className="quantity-decrease">
                  <img src={minusIcon} alt="" className="minus-icon" />
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button onClick={handleIncrease} className="quantity-increase">
                  <img src={plusIcon} alt="" className="plus-icon" />
                </button>
              </>
            )}
          </div>
        </div>
        {isOrderNew && (
          <button onClick={handleDelete} className="cart-item-delete">
            <img src={trashIcon} alt="" className="trash-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
