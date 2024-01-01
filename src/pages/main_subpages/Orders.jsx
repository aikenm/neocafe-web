import React, { useState } from "react";
import TakeawayOrders from "./orders_subpages/TakeawayOrders";
import InHouseOrders from "./orders_subpages/InHouseOrders";
import "../../styles/pages/main_subpages/orders_page.css";

const Orders = () => {
  const [activeSubpage, setActiveSubpage] = useState("takeaway");

  const renderSubpageContent = () => {
    switch (activeSubpage) {
      case "takeaway":
        return <TakeawayOrders />;
      case "inhouse":
        return <InHouseOrders />;
      default:
        return <TakeawayOrders />;
    }
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <button
          onClick={() => setActiveSubpage("takeaway")}
          className={`header-button ${
            activeSubpage === "takeaway" ? "active" : ""
          }`}
        >
          На вынос
        </button>
        <button
          onClick={() => setActiveSubpage("inhouse")}
          className={`header-button ${
            activeSubpage === "inhouse" ? "active" : ""
          }`}
        >
          В заведении
        </button>
      </div>
      <div className="orders-content">{renderSubpageContent()}</div>
    </div>
  );
};

export default Orders;
