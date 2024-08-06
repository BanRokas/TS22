import { useState } from "react";

import InputField from "../UI/molecules/InputField";
import Input from "../UI/atoms/Input";

const AddProduct = () => {

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

  return (
    <section>
      <h2>Add New Product</h2>
      <form>
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