import { useContext, useState } from "react";
import { WebshopContex } from "../contexts/webshop-context";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const { categories, createItem } = useContext(WebshopContex);

  const handleSubmit = (event) => {
    event.preventDefault();

    createItem(formData);
  };

  const handleChangeTitle = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      title: event.target.value,
    }));
  };

  const handleChangeDescription = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      description: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      category: event.target.value,
    }));
  };

  const handleChangePrice = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      price: event.target.value,
    }));
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          value={formData.title}
          onChange={handleChangeTitle}
          type="text"
          name="title"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={handleChangeDescription}
          name="description"
        />
      </div>
      <div className="form-group">
        <label>category</label>
        <select value={formData.category} onChange={handleChangeCategory}>
          {categories.map((category, i) => (
            <option key={i}>{category}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          value={formData.price}
          onChange={handleChangePrice}
          type="nummber"
          name="price"
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default Form;
