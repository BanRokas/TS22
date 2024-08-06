import { useContext } from "react";
import styled from "styled-components";

import ProductsContext from "../../contexts/Products";
import ProductCard from "../UI/molecules/ProductCard";

const ShopSection = styled.section`

  > h1{
    text-align: center;
  }
  > div{
    display: flex;
    justify-content: space-around;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

const Shop = () => {

  const { products } = useContext(ProductsContext);

  return (
    <ShopSection>
      <h1>Our Products</h1>
      <div>
        {
          products.map(product => 
            <ProductCard
              key={product.id}
              data={product}
            />
          )
        }
      </div>
    </ShopSection>
  );
}
 
export default Shop;