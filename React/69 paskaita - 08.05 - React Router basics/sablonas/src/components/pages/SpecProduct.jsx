import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const SpecProduct = () => {

  const [cardInfo, setCardInfo] = useState('');

  const { id } = useParams();
  console.log(id);

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
        </> :
        <p>loading</p>
      }
    </section>
  );
}
 
export default SpecProduct;