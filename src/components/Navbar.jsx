import React from "react";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        width: "100%",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: "0",
          padding: "0",
        }}
      >
        <li style={listItemStyle}>Stocks</li>
        <li style={listItemStyle}>Watchlist</li>
      </ul>
    </div>
  );
}

const listItemStyle = {
  color: "#ffffff",
  fontSize: "18px",
  cursor: "pointer",
  transition: "color 0.3s ease",
};

const listItemHoverStyle = {
  color: "#f5a623",
};

export default Navbar;
