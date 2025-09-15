import React from "react";
import logo from "../../images/sprinto2.png"; 
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Logo + Bot name */}
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Evidence Bot</h1>
      </div>

      {/* Action buttons */}
      <div className="header-actions">
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">📁</button>
        <button className="icon-btn">👤</button>
      </div>
    </header>
  );
}
