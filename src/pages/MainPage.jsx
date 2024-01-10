import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Menu from "./main_subpages/Menu";
import Orders from "./main_subpages/Orders";
import Profile from "./main_subpages/Profile";
import "../styles/pages/main_page.css";
import ordersIcon from "../images/orders-icon.svg";
import menuIcon from "../images/menu-icon.svg";
import profileIcon from "../images/profile-icon.svg";
import notificationsIcon from "../images/notifications-icon.svg";

const MainPage = () => {
  const navigate = useNavigate();
  const { activePage } = useParams();

  const renderContent = () => {
    switch (activePage) {
      case "menu":
        return <Menu />;
      case "orders":
        return <Orders />;
      case "profile":
        return <Profile />;
      default:
        return <Orders />;
    }
  };

  const isActive = (pageName) => {
    return activePage === pageName ? "sidebar-button active" : "sidebar-button";
  };

  return (
    <div className="main-page">
      <div className="sidebar">
        <button className="notifications-button">
          <img src={notificationsIcon} alt="" className="sidebar-button-icon" />
        </button>
        <button
          onClick={() => navigate("/main/orders")}
          className={isActive("orders")}
        >
          <img src={ordersIcon} alt="" className="sidebar-button-icon" />
          Заказы
        </button>
        <button
          onClick={() => navigate("/main/menu")}
          className={isActive("menu")}
        >
          <img src={menuIcon} alt="" className="sidebar-button-icon" />
          Меню
        </button>
        <button
          onClick={() => navigate("/main/profile")}
          className={isActive("profile")}
        >
          <img src={profileIcon} alt="" className="sidebar-button-icon" />
          Профиль
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default MainPage;
