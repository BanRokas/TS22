import RegisterForm from "../../organism/RegisterForm/RegisterForm";
import Heading from "../../atoms/Heading/Heading";

const RegisterPage = () => {
  return (
    <section>
      <Heading 
        size={6}
        text="Register Form"
      />
      <RegisterForm />
    </section>
  );
}
 
export default RegisterPage;