import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { Button, Form, Logo } from '../../Atoms';
import { Field } from '../../Molecules';
import EditProfileStyle from './editProfile.style';
import countryData from './CountryData.json';

// import { AuthContext } from "../../../context/AuthProvider";
import { updateProfile, getProfile } from "../../../api";
import { loadUser } from '../../../context/AuthProvider';

// const {REACT_APP_AUTH_TOKEN} = process.env;

function EditProfile() {
  const user = loadUser(localStorage.getItem('token'));
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDate] = useState('');

  const fetchUserDetails = useCallback(async () => {
    const apiResponse = await getProfile(user?.id);
    console.log(apiResponse, 'from get Profile')
    if(apiResponse.data.success){
      setUsername(apiResponse.data?.payload?.name)
      setCountry(apiResponse.data?.payload?.country)
      setCity(apiResponse.data?.payload?.city)
      setGender(apiResponse.data?.payload?.gender)
      setDate(apiResponse.data?.payload?.dateOfBirth.replace(/\//g, '-'));
    }else if(!apiResponse.data.success){
      setUsername("")
      setCountry("")
      setCity("")
      setGender("")
      setDate("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUpdateResponse = await updateProfile(username, country, city, gender, dob);
    
    if (apiUpdateResponse?.data?.success) {
      swal({
        text: "Profile update Successful",
        icon: "success",
        button: false,
        timer: 3000,
      });
      // setCode("");
      navigate("/profile");
    } else if (!apiUpdateResponse?.data?.success) {
      swal("Oops", apiUpdateResponse?.data?.message, "error", {
        button: false,
        timer: 3000,
      });
    } else {
      swal("Oops", apiUpdateResponse?.error, "error", {
        button: false,
        timer: 3000,
      });
    }
  }

  const navigate = useNavigate()

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  }
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  }
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  }
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  }

  // useEffect(() => {
  //   // handleChangeName();
  //   // handleChangeCountry();
  //   // handleChangeCity();
  //   // handleChangeDate();
  //   // handleSubmit()
  // }, []);

  return (
    <>
      <EditProfileStyle>
        <Logo />
        <div className="wrapper">

          <Form>
          <div className="profile_header">
          <span className="back_btn" onClick={() => navigate(-1)}>
            &lt; Back
          </span>
            <h1>Update Profile</h1>
          </div>
            {/* <p id="createNewPassword-description">
                Your new password must be different from previous password.
            </p> */}
            <Field
              type="text"
              placeholder="Enter your name"
              label="Username"
              value={username}
              handleChange={handleChangeName}
            />
            <div className="select_grp">
              <label htmlFor="country">Country</label>
              <select name="country" id="country" className="classic" onChange={handleChangeCountry}>
                {countryData['Africa'].map((item, idx) => <option key={idx} value={item}>{item}</option>)}
              </select>
            </div>
            <Field
              type="text"
              placeholder="Enter your City"
              label="City"
              value={city}
              handleChange={handleChangeCity}
            />
            <div className="select_grp">
              <label htmlFor="city">Gender</label>
              <select name='gender' id='gender' className="classic" onChange={handleChangeGender}>
                <option key={1} value={""}>Gender</option>
                <option key={2} value={"Male"}>Male</option>
                <option key={3} value={"Female"}>Female</option>
              </select>
            </div>
            <Field
              type="date"
              placeholder="Enter your Date of Birth"
              label="DOB"
              handleChange={handleChangeDate}
              value={dob}
            />
            <Button className="update_btn" onClick={(e) => handleSubmit(e)}>
              Update Profile
            </Button>
          </Form>
        </div>
      </EditProfileStyle>
    </>
  )
}

export default EditProfile
