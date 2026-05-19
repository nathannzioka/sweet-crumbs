import { useState } from "react";
import useProducts from "../hooks/useProducts";

function AdminPastryList() {
  const { products, deleteProduct, updatePrice } = useProducts();
  const [editPrice, setEditPrice] = useState("");

  return (
    <div>
      <h2>Manage Pastries</h2>

      {products.map((pastry) => (
        <div key={pastry.id} className="admin-card">
          <h3>{pastry.name}</h3>
          <p>{pastry.description}</p>
          <p>{pastry.origin}</p>

          <strong>Ksh{pastry.price}</strong>

          {/* UPDATE */}
          <div>
            <input
              type="number"
              placeholder="New price"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />

            <button
              onClick={() =>
                updatePrice(pastry.id, Number(editPrice))
              }
            >
              Update Price
            </button>
          </div>

          {/* DELETE */}
          <button
            onClick={() => deleteProduct(pastry.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPastryList;