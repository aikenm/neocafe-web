import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalData from "./profile_subpages/PersonalData";
import WorkSchedule from "./profile_subpages/WorkSchedule";
import "../../styles/pages/main_subpages/profile_page.css";
import ModalWindow from "../../components/ModalWindow";
import signOutIcon from "../../images/sign-out-icon.svg";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personalData");

  const handleExit = () => {
    setShowModal(true);
  };

  const handleConfirmExit = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  const handleCancelExit = () => {
    setShowModal(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <button
          className={`header-button ${
            activeTab === "personalData" ? "active" : ""
          }`}
          onClick={() => setActiveTab("personalData")}
        >
          Личные данные
        </button>
        <button
          className={`header-button ${
            activeTab === "workSchedule" ? "active" : ""
          }`}
          onClick={() => setActiveTab("workSchedule")}
        >
          График работы
        </button>
      </div>
      <div className="profile-content">
        {activeTab === "personalData" && <PersonalData />}
        {activeTab === "workSchedule" && <WorkSchedule />}
        <button onClick={handleExit} className="exit-button">
          <img src={signOutIcon} alt="Exit" className="sign-out-icon" />
          Выход
        </button>

        {showModal && (
          <ModalWindow
            title="Выход из учетной записи"
            message="Вы действительно хотите выйти из учетной записи?"
            onConfirm={handleConfirmExit}
            onCancel={handleCancelExit}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
