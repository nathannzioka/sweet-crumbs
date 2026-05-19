import { useEffect, useState } from "react";

import Search from "../components/Search";
import PastryCard from "../components/PastryCard";

import "../styles/shop.css";

function Shop() {
  const [pastries, setPastries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pastries")
      .then((res) => res.json())
      .then((data) => setPastries(data));
  }, []);

  const filteredPastries = pastries.filter((pastry) =>
    pastry.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Pastries</h1>

        <Search
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="pastry-grid">
        {filteredPastries.map((pastry) => (
          <PastryCard
            key={pastry.id}
            pastry={pastry}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;