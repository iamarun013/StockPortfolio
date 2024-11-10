import React, { useEffect, useState } from "react";

function Dashboard() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stocks");
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };
    fetchStocks();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            <h3>{stock.company}</h3>
            <p>{stock.description}</p>
            <p>Initial Price: {stock.initial_price}</p>
            <p>Price in 2002: {stock.price_2002}</p>
            <p>Price in 2007: {stock.price_2007}</p>
            <p>Symbol: {stock.symbol}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
