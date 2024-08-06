import { useState, useContext } from "react";
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

import ProductsContext from "../../contexts/Products";
import InputField from "../UI/molecules/InputField";
import Input from "../UI/atoms/Input";

const AddProduct = () => {

  const { setProducts } = useContext(ProductsContext);
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    name: '',
    image: '',
    price: '',
    description: ''
  });
  const onChangeF = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formInputs,
      price: Number(formInputs.price),
      id: uuid()
    };
    setProducts({
      type: 'add',
      newProduct: newProduct
    });
    navigate("/shop");
  }

  return (
    <section>
      <h2>Add New Product</h2>
      <form onSubmit={formSubmit}>
        <InputField
          labelText="Product name:"
          type="text"
          name="name" id="name"
          placeholderText="Name of the product"
          value={formInputs.name}
          onChangeF={onChangeF}
        />
        <InputField
          labelText="Product image:"
          type="url"
          name="image" id="image"
          placeholderText="url of the image"
          value={formInputs.image}
          onChangeF={onChangeF}
        />
        <InputField
          labelText="Product price:"
          type="number"
          name="price" id="price"
          placeholderText="Price of an item"
          value={formInputs.price}
          onChangeF={onChangeF}
        />
        <InputField
          labelText="Product description:"
          type="text"
          name="description" id="description"
          placeholderText="Describe the item you're adding"
          value={formInputs.description}
          onChangeF={onChangeF}
        />
        <Input
          type="submit"
          value="Add Product"
        />
      </form>
    </section>
  );
}
 
export default AddProduct;