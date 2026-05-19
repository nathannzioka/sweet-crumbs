import { useState, useEffect } from "react";

const API = "http://localhost:3001/pastries";

function useProducts() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  
  const addProduct = async (newPastry) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPastry),
    });

    const data = await res.json();
    setProducts((prev) => [...prev, data]);
  };


  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  
  const updatePrice = async (id, price) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    });

    const updated = await res.json();

    setProducts((prev) =>
      prev.map((p) => (p.id === id ? updated : p))
    );
  };

  return { products, addProduct, deleteProduct, updatePrice };
}

export default useProducts;