import React, { useState } from "react";
import InputMask from "react-input-mask";
import countries from "./countriesNum";
import "../styles/pages/login_page.css";
import arrowBack from "../images/arrow-left.svg";
import arrowDown from "../images/drop-down.svg";

const LoginPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [currentView, setCurrentView] = useState("form1");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleRequestCode = () => {
    setCurrentView("form2");
  };

  const handleVerifyCode = () => {
    // Verification logic here
  };

  const handleResendCode = () => {
    // Resend code logic here
  };

  const handleBack = () => {
    setCurrentView("form1");
    setCode("");
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
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
              <h5 className="input-title">Номер телефона</h5>
              <div className="country-phone-group">
                <div className="country-select-dropdown">
                  <button
                    className="country-select-toggle"
                    onClick={toggleDropdown}
                  >
                    <img
                      className="country-flag"
                      src={selectedCountry.flagUrl}
                      alt=""
                    />
                    <img
                      className="country-select-arrow"
                      src={arrowDown}
                      alt="Open"
                    />
                  </button>
                  {dropdownOpen && (
                    <ul className="country-select-options">
                      {countries.map((country, index) => (
                        <li
                          key={index}
                          onClick={() => selectCountry(country)}
                          className="country-select-option"
                        >
                          <img
                            className="country-flag"
                            src={country.flagUrl}
                            alt={country.label}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="static-country-code">
                  {selectedCountry.value}
                </div>
                <InputMask
                  mask={selectedCountry.phoneMask}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="(555) 555 555"
                  className="phone-input"
                />
              </div>
              <button
                className="login-button"
                onClick={handleRequestCode}
                disabled={phone.trim().length === 0}
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
                <img src={arrowBack} alt="Back" />
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
              <h5 className="input-title">Код из смс</h5>
              <InputMask
                mask="9 9 9 9"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                placeholder="0 0 0 0"
                className="code-input"
              />
              <button
                onClick={handleVerifyCode}
                className="login-button"
                disabled={code.trim().length !== 4}
              >
                Войти
              </button>
              <button onClick={handleResendCode} className="resend-button">
                Отправить повторно
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
