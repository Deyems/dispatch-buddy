import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Logo } from "../../Atoms";
import { Field } from "../../Molecules";
import ForgotPasswordStyle from "./ForgotPassword.style";
import { AuthContext } from "../../../context/AuthProvider";
import { validate } from "../../../api";
import swal from "sweetalert";

const initial = {
  email:""
};

function ForgotPassword() {
  const [, dispatch] = useContext(AuthContext);
    const navigate = useNavigate();
  // let { username } = state;
  const [formData, setFormData] = useState(initial);
 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
 };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.email) {
      swal("Failed!","All fields are required" , "error", {
        button: false,
        timer: 3000,
      });
      // alert("All fields are required")
    }
    else {
      // console.log(formData);

      //Set email as user to localstorage...
      localStorage.setItem('user', formData.email);
      const apiValidateResponse = await validate(formData.email);
      // console.log(formData);
      if (apiValidateResponse?.data?.success) {
        console.log(formData);
        dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: formData.email });
        swal({
          text: "An OTP has been sent to your email",
          icon: "success",
          button: false,
          timer: 3000,
        });
        //Should redirect to verify otp
         setTimeout(() => {
         return navigate("/verification");
        }, 3000);;
      } else if (!apiValidateResponse?.data?.success) {
        swal("Oops", apiValidateResponse?.data?.message, "error", {
          button: false,
          timer: 3000,
        });
      } else {
        swal("Oops", apiValidateResponse?.error, "error", {
          button: false,
          timer: 3000,
        });
      }
    }

    // const handleSubmit = async (e) => {
      // alert('Submitted!');
      // e.preventDefault();
      // const formComplete = formData.old_password && formData.new_password && formData.cfm_password;
      // dispatch({ type: "UPDATE_PASSWORD_START" });
      // if (!formComplete) alert("All fields are required")
       
      if (!true){
        // swal("Failed!","Please fill all details" , "error", {
        //   button: false,
        //   timer: 3000,
        // });
      } else {
  
        if(formData.new_password !== formData.cfm_password){
          swal("Failed!","Your passwords dont match" , "error", {
            button: false,
            timer: 3000,
          });
        }else {
          console.log('all are filled up... and password match');
          // console.log(formData, 'data passed', emailAddress, 'email passed too');
          // const apiUpdatePassResponse = await updatePassword(formData, emailAddress);
    
          // if (apiUpdatePassResponse?.data?.success) {
          //   dispatch({ type: "UPDATE_PASSWORD_SUCCESS", payload: apiUpdatePassResponse?.data?.payload });
          //   swal({
          //     text: "Password Update was Successful",
          //     icon: "success",
          //     button: false,
          //     timer: 3000,
          //   });
          //   return navigate("/profile");
          // }else if (!apiUpdatePassResponse?.data?.success) {
          //   swal("Oops", apiUpdatePassResponse?.data?.message, "error", {
          //     button: false,
          //     timer: 3000,
          //   });
          // } else {
          //   dispatch({
          //     type: "LOGIN_FAILURE",
          //     payload: apiUpdatePassResponse?.error,
          //   });
          //   swal("Oops", apiUpdatePassResponse?.message, "error", {
          //     button: false,
          //     timer: 3000,
          //   });
          // }
  
        }
      }
    // }

  }
  return (
    <>
      <ForgotPasswordStyle>
        <Logo />
        <div className="wrapper">
          <div className="header-text-wrap">
            <div className="back">
              <span onClick={() => navigate(-1)}>
                &lt; Back
              </span>
            </div>
            <h1>Forgot Password?</h1>
          </div>
          <Form>
            <p id="forgotpassword-description">
              Enter the email or password associated with your account and we'll
              send an email with instructions to reset your password.
            </p>
            <Field
              label="Email or Phone Number"
              placeholder="Email or Phone Number"
              type="email"
              name="email"
              formData={formData}
              handleChange={handleChange}
            />
            <Button onClick={handleSubmit}>Send</Button>
          </Form>
        </div>
      </ForgotPasswordStyle>
    </>
  );
}

export default ForgotPassword;
