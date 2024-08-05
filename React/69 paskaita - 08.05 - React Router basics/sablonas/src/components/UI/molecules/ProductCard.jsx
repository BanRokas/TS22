import { Link } from "react-router-dom";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 300px;
  padding: 10px 5px;
  border: 1px solid black;

  > img{
    width: 100%;
    height: auto;
  }
  > h3{
    text-align: center;
  }
`;

const ProductCard = ({ data }) => {
  return (
    <CardDiv>
      <img
        src={data.image}
        alt={data.name}
      />
      <h3>{data.name}</h3>
      <p>Price: {data.price}&euro;</p>
      <Link to={data.id}>More info</Link>
    </CardDiv>
  );
}
 
export default ProductCard;