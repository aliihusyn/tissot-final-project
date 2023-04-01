import { useEffect, useState } from "react";

//components
import Input from "../components/Input";
import Button from "../components/Button";

// Swal
import { successSwal, errorSwal } from "../utils/Swal";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState(true);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setRegisterData({ ...registerData, [name]: value });
    if (registerData !== null) {
      setErrorState(false);
    }
  };

  // Validate Form
  function validateObject(obj) {
    if (typeof obj !== "object" || obj === null) {
      throw new Error("Form doldurma zamanı xəta !");
    }

    const { firstName, surname, email, password } = obj;

    if (typeof firstName !== "string" || firstName.trim().length === 0) {
      throw new Error("name must be written");
    }

    if (typeof surname !== "string" || surname.trim().length === 0) {
      throw new Error("last name must be written");
    }

    if (typeof email !== "string" || email.trim().length === 0) {
      throw new Error("Email must be written correctly");
    }

    if (typeof password !== "string" || password.trim().length === 0) {
      throw new Error("Password must be entered");
    }

    if (
      password &&
      !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/gm.test(
        password
      )
    ) {
      throw new Error("The password does not match the pattern");
    }

    if (
      email &&
      !/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/gm.test(email)
    ) {
      throw new Error("The email entered is incorrect !");
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      validateObject(registerData);
        successSwal("Registration completed successfully");
      setRegisterData({
        firstName: "",
        surname: "",
        email: "",
        password: "",
      });
    } catch (error) {
        errorSwal(error);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <div className="row">
          <div className="sectionTitle">
            <h2>Create an account</h2>
          </div>
          <div className="formBox">
            <form className="form">
              <p className="personal">Personal information</p>
              <Input
                type="text"
                className="formInp"
                name="firstName"
                value={registerData.firstName}
                onChange={handleChange}
                placeHolder="FIRST NAME"
              />
              <Input
                type="text"
                className="formInp"
                name="surname"
                value={registerData.surname}
                onChange={handleChange}
                placeHolder="LAST NAME"
              />
              <Input
                type="email"
                className="formInp"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                placeHolder="EMAIL"

              />
              <Input
                type="password"
                className="formInp"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                placeHolder="PASSWORD"

              />
              <Button
                onClick={handleSubmit}
                // className={errorState ? "formBtn" : "formBtn btn success"}
                className="btn"
                disabled={errorState}
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
