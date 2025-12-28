import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container" style={{ position: "relative" }}>
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile */}
        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>

          {/* Dropdown */}
          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "55px",
                right: "0px",
                width: "180px",
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
                zIndex: 999,
              }}
              onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside dropdown
            >
              <p style={{ margin: "0 0 10px 0", fontSize: 12, color: "#666" }}>
                Account
              </p>

              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
