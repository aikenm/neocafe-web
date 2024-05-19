import React from "react";
import "../styles/components/ModalWindow.css";
import closeIcon from "../images/cancelIcon.svg";

const ModalWindow = ({ title, message, onConfirm, onCancel }) => {
  const handleOverlayClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-window">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close-button" onClick={onCancel}>
            <img src={closeIcon} alt="" className="modal-close-icon" />
          </button>
        </div>
        <div className="modal-content">
          <p>{message}</p>
        </div>
        <div className="modal-actions">
          <button className="modal-confirm-button" onClick={onConfirm}>
            Да
          </button>
          <button className="modal-cancel-button" onClick={onCancel}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
