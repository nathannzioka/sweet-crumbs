import { useState, useRef, useId } from "react";
import useProducts from "../hooks/useProducts";

function AddPastryForm() {
  const { addProduct } = useProducts();

  // controlled form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: ""
  });

  const [error, setError] = useState("");

  // required hooks
  const nameRef = useRef(null);
  const formId = useId();

  // handle input change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // submit form
  async function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (
      !formData.name ||
      !formData.description ||
      !formData.origin ||
      !formData.price
    ) {
      setError("All fields are required");
      nameRef.current.focus();
      return;
    }

    // POST request via custom hook
    await addProduct({
      ...formData,
      price: Number(formData.price)
    });

    // reset form
    setFormData({
      name: "",
      description: "",
      origin: "",
      price: ""
    });

    setError("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add New Pastry</h2>

      {error && <p className="error">{error}</p>}

      <label htmlFor={`${formId}-name`}>Name</label>
      <input
        id={`${formId}-name`}
        ref={nameRef}
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Pastry name"
      />

      <label>Description</label>
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <label>Origin</label>
      <input
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        placeholder="Country"
      />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />

      <button type="submit">Add Pastry</button>
    </form>
  );
}

export default AddPastryForm;