import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductsContext from "../../contexts/Products";

import InputField from "../UI/molecules/InputField";
import Input from "../UI/atoms/Input";

const EditProduct = () => {
  const { id } = useParams();
  const { setProducts } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setFormInputs({
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description
        });
      });
  }, []);

  const onChangeF = (e) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const editedProduct = {
      ...formInputs,
      price: Number(formInputs.price)
    };
    setProducts({
      type: "edit",
      id,
      editedProduct,
    });
    // sukasi ratukas ekrane
    fetch(`http://localhost:8080/products/${id}`, {
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(editedProduct)
    }).then(() => navigate(`/shop/item/${id}`));
  };

  return (
    <section>
      <h2>Edit Product</h2>
      <form onSubmit={formSubmit}>
        <InputField
          labelText="Product name:"
          type="text"
          name="name"
          id="name"
          value={formInputs.name}
          onChangeF={onChangeF}
        />
        <InputField
          labelText="Product image:"
          type="url"
          name="image"
          id="image"
          value={formInputs.image}
          onChangeF={onChangeF}
        />
        <InputField
          labelText="Product price:"
          type="number"
          name="price"
          id="price"
          value={formInputs.price}
          onChangeF={onChangeF}
        />
        <InputField
          labelText="Product description:"
          type="text"
          name="description"
          id="description"
          value={formInputs.description}
          onChangeF={onChangeF}
        />
        <Input 
          type="submit"
          value="Edit this s"
        />
      </form>
    </section>
  );
};

export default EditProduct;