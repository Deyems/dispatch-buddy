import React, { useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import SignUpStyle from "./SignUp.style";
import { AuthContext } from "../../../context/AuthProvider";
import { NavLink } from "react-router-dom";
import { signup } from "../../../api";
import swal from "sweetalert";

const initial = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  dateOfBirth: "",
};
function SignUp() {
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
    if (!formComplete) swal("Oops", 'All fields are required', "error", {
      button: false,
      timer: 3000,
    });
    else {
      //TODO Validation of form here.
      if(formData.dateOfBirth) formData.dateOfBirth = formData.dateOfBirth.replace(/-/g, '/');
      const apiResponse = await signup(formData);
      if (apiResponse?.data?.success) {
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: formData.email,
        });

        swal({
          text: "Signup was Successful",
          icon: "success",
          button: false,
          timer: 3000,
        });
        return navigate("/verification");
      } else if (!apiResponse?.data?.success) {
        dispatch({
          type: "SIGNUP_FAILURE",
          payload: apiResponse?.error,
        });
        swal("Oops", apiResponse?.data?.message, "error", {
          button: false,
          timer: 3000,
        });
      } else {
        dispatch({
          type: "SIGNUP_FAILURE",
          payload: apiResponse?.error,
        });
        swal("Oops", apiResponse?.message, "error", {
          button: false,
          timer: 3000,
        });
      }
    }
  };

  return (
    <>
      <SignUpStyle>
        <Logo />
        <div className="wrapper">
          <h1>Create an account</h1>
          <Form>
            <Field
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              name="name"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              label="Phone Number"
              placeholder="Enter your phone number"
              type="number"
              name="phoneNumber"
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
            <Field
              type="date"
              label="Date of Birth"
              name="dateOfBirth"
              formData={formData}
              handleChange={handleChange}
            />
            <Button className="submit_btn" onClick={handleSubmit}>
              Sign Up
            </Button>
          </Form>
          <p id="bottom">
            Already have an account?
            <NavLink to="/login" className="login_link">
              Login
            </NavLink>
          </p>
        </div>
      </SignUpStyle>
    </>
  );
}

export default SignUp;
