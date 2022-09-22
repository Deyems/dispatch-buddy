import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import RiderRequestFormStyle from './RiderRequestForm.style';
import { Button, Form } from "../../Atoms";
import { Field } from "../../Molecules";
import { requestRider } from '../../../api/auth';
import { AuthContext } from '../../../context/AuthProvider';
import { removeUserDetails } from '../../../utils';
const initialState = {
    name: '',
    email: '',
    mobileNumber: '',
}

function RiderRequestForm() {
    const [, dispatch] = useContext(AuthContext);
    const navigate = useNavigate();
    const otherDetails = {
        pickup: localStorage.getItem('pickup'),
        dest: localStorage.getItem('destination'),
        uuid: localStorage.getItem('uuid'),
    }

    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    const handleCancel = () => {
        // removeUserDetails();
        navigate(-1);
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "START_REQUEST_RIDER" });
    const formComplete = formData.email && formData.mobileNumber && formData.name;

    if (!formComplete){
        swal("Failed!","Please fill all fields" , "error", {
            button: false,
            timer: 3000,
        });
    }
    else {
      const response = await requestRider(formData, otherDetails);

      if (response?.status === 200) {
        dispatch({ type: "REQUEST_RIDER_SUCCESS", payload: response?.data });
        swal({
          text: "Request sent to Rider Successfully",
          icon: "success",
          button: false,
          timer: 3000,
        });
        removeUserDetails();
        return navigate("/");
      }else if (!response?.data?.success) {
        swal("Oops", response?.data?.error_desription, "error", {
          button: false,
          timer: 3000,
        });
        removeUserDetails();
      } else {
        dispatch({
          type: "REQUEST_RIDER_FAILURE",
          payload: response?.error,
        });
        removeUserDetails();
        console.log(response, 'error faced>....?')
        swal("Oops", response?.data?.error_desription, "error", {
          button: false,
          timer: 3000,
        });
      }
    }
    }

    return (
        <RiderRequestFormStyle>
            <Form>
                <Field
                    type="text"
                    placeholder="Enter your Fullname"
                    label="Full name"
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
                    type="number"
                    placeholder="Enter your mobile number"
                    label="Mobile number"
                    name="mobileNumber"
                    formData={formData}
                    handleChange={handleChange}
                />
                <Button className="submit_btn" onClick={handleSubmit}>Submit</Button>
            </Form>
            <p id="bottom">
                <span>Not interested again?</span>
                <span onClick={handleCancel} className='cancel_request'>Cancel</span>
            </p>
        </RiderRequestFormStyle>
    )
}

export default RiderRequestForm