import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import LoginStyle from "./Login.style";
import { AuthContext } from "../../../context/AuthProvider";
import { login } from "../../../api";
import swal from "sweetalert";
// import { setAuthToken } from "../../../utils";

const initial = {
  grant_type: "password",
  email: "",
  password: "",
};
function Login() {
  const [, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formComplete = formData.email && formData.password;
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    // if (!formComplete) alert("All fields are required")
        if (!formComplete){
           swal("Failed!","Please enter a valid email and password" , "error", {
          button: false,
          timer: 3000,
        });
    }
    else {
      const response = await login(formData);

      if (response?.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS", payload: response?.data });
        swal({
          text: "Login was Successful",
          icon: "success",
          button: false,
          timer: 3000,
        });
        return navigate("/location");
      }else if (!response?.data?.success) {
        swal("Oops", response?.data?.error_desription, "error", {
          button: false,
          timer: 3000,
        });
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: response?.error,
        });
        console.log(response, 'error faced>....?')
        swal("Oops", response?.data?.error_desription, "error", {
          button: false,
          timer: 3000,
        });
      }
    }
  };

  return (
    <>
      <LoginStyle>
        <Logo />
        <div className="wrapper">
          <h1>Login</h1>
          <Form>
            <Field
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              type="password"
              placeholder="Enter your password"
              label="Password"
              name="password"
              formData={formData}
              handleChange={handleChange}
            />
            <NavLink
              to="/forgot-password"
              className='forgot-password'
            >
              Forgot password?
            </NavLink>
            <Button className="submit_btn" onClick={handleSubmit}>Submit</Button>
          </Form>
          <p id="bottom">
            Don’t have an account? 
            <NavLink to="/signup" className='create_account_link'>
              Create Account
            </NavLink>
            {/* <a href="/signup">Create Account</a> */}
          </p>
        </div>
      </LoginStyle>
    </>
  );
}

export default Login;
