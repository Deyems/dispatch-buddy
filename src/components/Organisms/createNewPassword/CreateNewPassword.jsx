import React, { useState, useContext } from "react";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import CreateNewPasswordStyle from "./CreateNewPassword.style";
import { AuthContext } from "../../../context/AuthProvider";
import { reset } from "../../../api";
import swal from "sweetalert";

const initial = {
  password: "",
  confirmPassword: "",
};

function CreateNewPassword() {
  const [state] = useContext(AuthContext);
  let { username } = state;
  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formComplete = formData.password && formData.confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formComplete) alert("All fields are required");
    if (formData.password !== formData.confirmPassword)
      alert("Incorrect password");
    else {
      // console.log(formData);
      const { data, error } = await reset(username, formData);
      // console.log(formData);
      if (data?.data?.success) {
        // console.log(formData);
        swal({
          text: "Password reset was successful",
          icon: "success",
          button: false,
          timer: 3000,
        });
        // return navigate("/");
      } else if (!data?.data?.success) {
        swal("Oops", data?.data?.message, "error", {
          button: false,
          timer: 3000,
        });
      } else {
        swal("Oops", error, "error", {
          button: false,
          timer: 3000,
        });
      }
    }
  };
  return (
    <>
      <CreateNewPasswordStyle>
        <Logo />
        <div className="wrapper">
          <h1>Create new password?</h1>
          <Form>
            <p id="createNewPassword-description">
              Your new password must be different from previous password.
            </p>
            <Field
              type="password"
              placeholder="Enter new password"
              label="New Password"
              name="password"
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              type="password"
              placeholder="Confirm password"
              label="Confirm Password"
              name="confirmPassword"
              formData={formData}
              handleChange={handleChange}
            />
            <Button onClick={handleSubmit}>Reset Password</Button>
          </Form>
        </div>
      </CreateNewPasswordStyle>
    </>
  );
}

export default CreateNewPassword;
