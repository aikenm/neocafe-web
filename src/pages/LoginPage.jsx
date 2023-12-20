import React, { useState } from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import { countryOptions as countries } from "./countriesNum";
import "../styles/pages/login_page.css";
import arrowBack from "../images/arrow-left.svg";

const LoginPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [currentView, setCurrentView] = useState("form1");

  const handleRequestCode = () => {
    setCurrentView("form2");
    // Trigger code request logic
  };

  const handleVerifyCode = () => {
    // Verify code logic
  };

  const handleResendCode = () => {
    // Resend code logic
  };

  const handleBack = () => {
    setCurrentView("form1");
  };

  const fullPhoneNumber = selectedCountry.value + phone;

  return (
    <div className="login-page">
      <div className="login-container">
        {currentView === "form1" && (
          <div className="login-form">
            <h2 className="login-form-header">Укажите номер телефона</h2>
            <div className="form-content">
              <h1 className="form-title">Вход</h1>
              <h2 className="form-text">
                Введите номер телефона, на который придет код
              </h2>
              <div className="login-input-group">
                <Select
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  options={countries}
                  className="country-select"
                  isSearchable={false}
                />
                <div className="phone-input-group">
                  <span className="country-code">{selectedCountry.value}</span>
                  <InputMask
                    mask={selectedCountry.phoneMask}
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="(555) 555 555"
                    className="phone-input"
                  />
                </div>
              </div>
              <button
                className="request-code-button"
                onClick={handleRequestCode}
              >
                Получить код
              </button>
            </div>
          </div>
        )}

        {currentView === "form2" && (
          <div className="login-form">
            <div className="login-form-header">
              <button onClick={handleBack} className="back-button">
                <img src={arrowBack} />
              </button>
              <h2 className="login-form-header-title">
                Введите код подтверждения
              </h2>
            </div>
            <div className="form-content">
              <h1 className="form-title">Вход</h1>
              <h2 className="form-text">
                Код подтверждения был отправлен на номер {fullPhoneNumber}
              </h2>
              <InputMask
                mask="999-999"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Код из SMS"
                className="code-input"
              />
              <button onClick={handleVerifyCode}>Войти</button>
              <button onClick={handleResendCode}>Отправить повторно</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
