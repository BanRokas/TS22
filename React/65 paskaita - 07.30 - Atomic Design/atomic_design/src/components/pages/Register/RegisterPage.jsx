import RegisterForm from "../../organism/RegisterForm/RegisterForm";
import Heading from "../../atoms/Heading/Heading";

const RegisterPage = () => {
  return (
    <section>
      <Heading 
        size={2}
        text="Register Form"
      />
      <RegisterForm />
    </section>
  );
}
 
export default RegisterPage;