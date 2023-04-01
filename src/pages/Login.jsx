//components
import Button from "../components/Button";
import Input from "../components/Input";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login-content">
          <div className="section-title">
            <h2>login or create an account</h2>
          </div>
          <div className="row">
            <div className="left-login">
              <h2>registered customers</h2>
              <div className="form-control">
                <Input type="email" className="formInp" placeHolder="EMAIL" />
                <Input
                  type="password"
                  className="formInp"
                  placeHolder="PASSWORD"
                />
                <Button className="login-btn btn">sign in</Button>
              </div>
            </div>
            <div className="right-register">
              <h2>new customers</h2>
              <div className="info">
                <p>
                  By creating an Account, you can check out faster, keep more
                  than one address, track your orders and more.
                </p>
              </div>
              <Link to="/register">
                <Button className="reg-btn btn">create an account</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
