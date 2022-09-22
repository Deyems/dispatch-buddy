import React, {useState, useContext, useCallback, useEffect} from 'react'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Logo } from '../../Atoms'
import { Field } from '../../Molecules'
import UpdatePasswordStyle from './updatePassword.style'
import { AuthContext } from '../../../context/AuthProvider'
import { updatePassword, getProfile } from "../../../api";
import { loadUser } from '../../../context/AuthProvider'

const initial = {
  old_password: "",
  new_password: "",
  cfm_password: "",
};

function UpdatePassword() {
  const user = loadUser(localStorage.getItem('token'));
  //fetch actual detail of the person....
  const [, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");

  const fetchUserDetails = useCallback(async () => {
    let apiResponse = await getProfile(user?.id);
    console.log(apiResponse, 'from get Profile on update pawd Page')
    if(apiResponse.data.success){
      setEmailAddress(apiResponse.data?.payload?.email);
    }else if(!apiResponse.data.success){

      swal("Oops", apiResponse?.data?.message, "error", {
        button: false,
        timer: 3000,
      });

    }else {
      //Error occured while fetching data
      swal("Oops", apiResponse?.message, "error", {
        button: false,
        timer: 3000,
      });
    }

  },[user?.id])

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails])

  const [formData, setFormData] = useState(initial);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // alert('Submitted!');
    e.preventDefault();
    const formComplete = formData.old_password && formData.new_password && formData.cfm_password;
    dispatch({ type: "UPDATE_PASSWORD_START" });
    // if (!formComplete) alert("All fields are required")
     
    if (!formComplete){
      swal("Failed!","Please fill all details" , "error", {
        button: false,
        timer: 3000,
      });
    } else {

      if(formData.new_password !== formData.cfm_password){
        swal("Failed!","Your passwords dont match" , "error", {
          button: false,
          timer: 3000,
        });
      }else {
        const apiUpdatePassResponse = await updatePassword(formData, emailAddress);
  
        if (apiUpdatePassResponse?.data?.success) {
          dispatch({ type: "UPDATE_PASSWORD_SUCCESS", payload: apiUpdatePassResponse?.data?.payload });
          swal({
            text: "Password Update was Successful",
            icon: "success",
            button: false,
            timer: 3000,
          });
          return navigate("/profile");
        }else if (!apiUpdatePassResponse?.data?.success) {
          swal("Oops", apiUpdatePassResponse?.data?.message, "error", {
            button: false,
            timer: 3000,
          });
        } else {
          dispatch({
            type: "LOGIN_FAILURE",
            payload: apiUpdatePassResponse?.error,
          });
          swal("Oops", apiUpdatePassResponse?.message, "error", {
            button: false,
            timer: 3000,
          });
        }

      }
    }
  }

  return (
    <>
      <UpdatePasswordStyle>
        <Logo />
        <div className="wrapper">
          <span className="back_btn" onClick={() => navigate(-1)}>
            &lt; Back
          </span>
          <Form>
            <h1>Update password</h1>
            {/* <p id="createNewPassword-description">
                Your new password must be different from previous password.
            </p> */}
            <Field
              type="password"
              placeholder="Enter Old password"
              label="Old Password"
              name={'old_password'}
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              type="password"
              placeholder="Enter new password"
              label="New Password"
              name={'new_password'}
              formData={formData}
              handleChange={handleChange}
            />
            <Field
              type="password"
              placeholder="Confirm password"
              label="Confirm Password"
              name={'cfm_password'}
              formData={formData}
              handleChange={handleChange}
            />
            <Button className="update_btn" onClick={handleSubmit}>
              Update Password
            </Button>
          </Form>
        </div>
      </UpdatePasswordStyle>
    </>
  )
}

export default UpdatePassword
