import React from "react";
import "../styles/components/MenuCard.css"; // Update the path as necessary

const MenuCard = ({ name, price, image, onAdd }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={name} className="menu-card-image" />
      <div className="menu-card-info">
        <h4 className="menu-card-name">{name}</h4>
        <p className="menu-card-price">{price} с</p>
      </div>
      <button className="menu-card-add-button" onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export default MenuCard;
