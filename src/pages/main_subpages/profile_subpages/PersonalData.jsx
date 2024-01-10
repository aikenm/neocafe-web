import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalWindow from "../../../components/ModalWindow";
import "../../../styles/pages/main_subpages/profile_page.css";
import signOutIcon from "../../../images/sign-out-icon.svg";

const PersonalData = () => {
  const personalData = useSelector((state) => state.profile);

  return (
    <div className="personal-data-page">
      <div className="personal-data-container">
        <div className="personal-data-header">
          <h2>Личные данные</h2>
        </div>
        <div className="personal-data-form">
          <div className="personal-data-wrapper">
            <div className="personal-data-field">
              <label className="personal-input-title">Имя</label>
              <span className="personal-data-value">
                {personalData.firstName}
              </span>
            </div>
            <div className="personal-data-field">
              <label className="personal-input-title">Фамилия</label>
              <span className="personal-data-value">
                {personalData.lastName}
              </span>
            </div>
          </div>
          <div className="personal-data-wrapper">
            <div className="personal-data-field">
              <label className="personal-input-title">Номер телефона</label>
              <span className="personal-data-value">{personalData.phone}</span>
            </div>
            <div className="personal-data-field">
              <label className="personal-input-title">Дата рождения</label>
              <span className="personal-data-value">
                {personalData.birthDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
