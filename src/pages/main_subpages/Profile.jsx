import React, { useState } from "react";
import PersonalData from "./profile_subpages/PersonalData";
import WorkSchedule from "./profile_subpages/WorkSchedule";
import "../../styles/pages/main_subpages/profile_page.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personalData");

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
      </div>
    </div>
  );
};

export default Profile;
