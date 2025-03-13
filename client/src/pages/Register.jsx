import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRows } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRows type="text" name="name" defaultValue="" />
        <FormRows
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue=""
        />
        <FormRows type="email" name="Email" defaultValue="" />
        <FormRows type="username" name="username" defaultValue="" />
        <FormRows type="password" name="password" defaultValue="" />
        <FormRows
          type="password"
          name="confirmPassword"
          defaultValue=""
          labelText="Confirm Password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
