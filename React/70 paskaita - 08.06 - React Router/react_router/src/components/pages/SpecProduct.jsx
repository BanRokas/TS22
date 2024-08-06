import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';

import ProductsContext from "../../contexts/Products";

const SpecProduct = () => {

  const [cardInfo, setCardInfo] = useState('');
  const { setProducts } = useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  useEffect(()=>{
    fetch(`http://localhost:8080/products/${id}`)
      .then(res => res.json())
      .then(data => setCardInfo(data))
  }, []);

  return (
    <section>
      {
        cardInfo ?
        <>
          <h3>{cardInfo.name}</h3>
          <img
            style={{width:"100px"}}
            src={cardInfo.image}
            alt={cardInfo.name}
          />
          <p>Price: {cardInfo.price}&euro;</p>
          <p>{cardInfo.description}</p>
          <button
            onClick={() => {
              setProducts({
                type: 'remove',
                id: cardInfo.id
              });
              navigate("/shop");
            }}
          >Delete</button>
        </> :
        <p>loading</p>
      }
    </section>
  );
}
 
export default SpecProduct;