import React from "react";
import "../styles/components/MenuDetailModal.css";
import closeIcon from "../images/cancelIcon.svg";

const MenuDetail = ({ item, onClose, onAdd }) => {
  const handleAddClick = () => {
    onAdd(item);
    onClose();
  };

  return (
    <div className="menu-detail-backdrop">
      <div className="menu-detail-modal">
        <div className="menu-detail-header">
          <h2 className="menu-detail-title">{item.name}</h2>
          <button className="menu-detail-close" onClick={onClose}>
            <img src={closeIcon} alt="" className="modal-close-icon" />
          </button>
        </div>
        <div className="menu-detail-content">
          <img src={item.image} alt={item.name} className="menu-detail-image" />
          <span className="menu-detail-description">{item.description}</span>
        </div>
        <div className="menu-detail-ingredients-wrapper">
          <span className="ingredients-title">Основные ингредиенты:</span>
          <ul className="menu-detail-ingredients">
            {item.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <button className="menu-detail-add-button" onClick={handleAddClick}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default MenuDetail;
