import React from "react";
import "../styles/components/MenuCard.css";
import addIcon from "../images/add-icon.svg";

const MenuCard = ({ name, price, image, onAdd }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={name} className="menu-card-image" />
      <div className="menu-card-info">
        <h4 className="menu-card-name">{name}</h4>
        <p className="menu-card-price">{price} с</p>
      </div>
      <button className="menu-card-add-button" onClick={onAdd}>
        <img src={addIcon} alt="add-icon" className="add-icon" />
      </button>
    </div>
  );
};

export default MenuCard;
