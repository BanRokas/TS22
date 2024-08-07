import { createContext, useReducer, useEffect } from "react";

const ProductsContext = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'setData':
      return action.allData;
    case 'add':
      fetch(`http://localhost:8080/products`,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.newProduct)
      });
      return [...state, action.newProduct];
    case 'remove':
      fetch(`http://localhost:8080/products/${action.id}`,{
        method: "DELETE"
      });
      return state.filter(el => el.id !== action.id);
    case 'edit':
      return state.map(el => {
        if(el.id !== action.id){
          return el;
        } else {
          return {
            ...action.editedProduct,
            id: action.id
          }
        }
      });
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then(res => res.json())
      .then(data => setProducts({
        type: "setData",
        allData: data
      }))
  }, []);

  const returnSpec = (id) => {
    return products.find(el => el.id === id);
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        returnSpec
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider };
export default ProductsContext;