import { useContext } from "react";
import PageLoaderContext from "../../../contexts/PageLoader";

import RegisterForm from "../../UI/organism/forms/RegisterForm";

const RegisterPage = () => {

  const { setPageLoader } = useContext(PageLoaderContext);

  return (
    <section>
      <h2>Create new account</h2>
      <RegisterForm />
      <button
        onClick={() => setPageLoader('login')}
      >Have an account? Login.</button>
    </section>
  );
}
 
export default RegisterPage;