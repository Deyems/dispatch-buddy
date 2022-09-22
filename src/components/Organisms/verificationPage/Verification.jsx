import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { Form, Logo } from "../../Atoms";
import LoginStyle from "../login/Login.style";
// import { AuthContext, useAuth } from "../../../context/AuthProvider";
import { verify, validate } from "../../../api";
import { getUser } from "../../../utils";
import swal from "sweetalert";

function Verification() {
  const [code, setCode] = useState('');
  // const authProp = useAuth();
  
  const navigate = useNavigate();

  async function handleResend() {
    const apiValidateResponse = await validate(getUser());
    
    if (apiValidateResponse?.data?.success) {
      swal("Resent", apiValidateResponse?.data?.message, "success", {
      button: false,
      timer: 3000,
    });
      setCode("");
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

  async function handleSubmit() {
    try {
    if(code.toString().length >= 6){
      const apiVerifyResponse = await verify({username: getUser(), otp: code.toString()});
      
      if (apiVerifyResponse?.data?.success) {
        swal({
          text: "Account verification was Successful",
          icon: "success",
          button: false,
          timer: 3000,
        });
        setCode("");
        return navigate("/login");
      } else if (!apiVerifyResponse?.data?.success) {
        swal("Oops", apiVerifyResponse?.data?.message, "error", {
          button: false,
          timer: 3000,
        });
      } else {
        swal("Oops", apiVerifyResponse?.error, "error", {
          button: false,
          timer: 3000,
        });
      }
    }
    } catch (error) {
      console.log('error', error);
      swal("Oops", error?.message, "error", {
        button: false,
        timer: 3000,
      });
    }
    
  }
  if (code.toString().length >= 6)
    setTimeout(() => {
      console.log('calling handleSubmit fxn');
      handleSubmit();
    }, 3000);
  const handleChange = (code) => setCode(code);
  return (
    <LoginStyle>
      <Logo />
      <div className="wrapper">
        <h1>Verification</h1>
        <Form>
          <p id="verification-description">
            We’ve sent an OTP code to your email. Please check your email.
          </p>

          {/* <Field label="OTP" placeholder="Enter your OTP" type="text" />
            <Button onClick={handleSubmit}>Submit</Button> */}
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={6}
            separator={<span style={{ width: ".8rem" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              fontSize: "0.75rem",
              color: "#21334f",
              fontWeight: "400",
              caretColor: "#580AFF",
              width: "3.125rem",
              height: "3.125rem",
              background: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.24)",
              borderRadius: "4px",
            }}
            focusStyle={{
              border: "1px solid #580AFF",
              outline: "none",
            }}
          />
        </Form>
        <p id="bottom">
          Didn’t receive OTP? <span onClick={handleResend}>Resend Code</span>
        </p>
      </div>
    </LoginStyle>
  );
}

export default Verification;
