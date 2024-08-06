import { NavLink, Outlet } from "react-router-dom";

const ShopOutlet = () => {
  return (
    <>
      <NavLink to="/shop/addItem">AddItem</NavLink>
      <Outlet /> {/* Užkrauk iš nest'intų dalykų tą, kurio path'as atitinka dabartinį URL */}
    </>
  );
}
 
export default ShopOutlet;