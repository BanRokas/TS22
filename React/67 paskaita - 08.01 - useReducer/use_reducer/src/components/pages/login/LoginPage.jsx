import { useContext } from "react";
import PageLoaderContext from "../../../contexts/PageLoader";

import LoginForm from "../../UI/organism/forms/LoginForm";

const LoginPage = () => {

  const { setPageLoader } = useContext(PageLoaderContext);

  return (
    <section>
      <h2>Log into existing account</h2>
      <LoginForm />
      <button
        onClick={() => setPageLoader('register')}
      >Don't yet have an account? Create new one.</button>
    </section>
  );
}
 
export default LoginPage;