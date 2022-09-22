import React, { useContext, useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { ProfileStyle } from "./profile.style";
import Avatar_Img from "../../../assets/images/avatar_profile.png";
import {ReactComponent as LockProfile} from "../../../assets/icons/Lock.svg";
import {ReactComponent as Logout} from "../../../assets/icons/logout.svg";
import { AuthContext } from "../../../context/AuthProvider";
import { loadUser } from "../../../context/AuthProvider";
import { getProfile } from "../../../api";

function Profile() {
  // eslint-disable-next-line no-unused-vars
  const [, dispatch] = useContext(AuthContext);
  const [userResult, setUserResult] = useState({});
  const navigate = useNavigate();
  const user = loadUser(localStorage.getItem('token'));
  
  const fetchUserDetails = useCallback(async () => {
    let apiResponse = await getProfile(user?.id);
    console.log(apiResponse, 'from get Profile on Profile Page')
    if(apiResponse.data.success){
      setUserResult(apiResponse.data?.payload);
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

  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    swal({
      text: "Logged out Successfully",
      icon: "success",
      button: false,
      timer: 3000,
    });
    return navigate("/");
  };
  
  return (
    <ProfileStyle>
      <div>
        <div className="header_profile">
          <h1>Profile</h1>
        </div>
        <div className="avatar_wrap">
          <figure>
            <img src={Avatar_Img || userResult?.dp} alt="avatar img" />
            <figcaption>{userResult?.name}</figcaption>
            <div className="role">{userResult?.accountType}</div>
          </figure>
        </div>
        <div className="list_action">
          <ul className="list_action_tree">
            <li>
              <NavLink to={"/edit-profile"}>
                <span className="edit-img-wrapper">
                  <img src={Avatar_Img || userResult?.dp} alt="edit icon" />
                </span>
                <span>Edit Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/change-password"}>
                <span className="edit-img-wrapper">
                  {/* <img src={LockProfile} alt="lock icon" /> */}
                  <LockProfile/>
                </span>
                <span>Change Password</span>
              </NavLink>
            </li>
            <li onClick={handleLogout}>
              <div>
                <span className="edit-img-wrapper">
                  {/* <img src={Logout} alt="logout icon" /> */}
                  <Logout/>
                </span>
                <span>Logout</span>
              </div>
            </li>
          </ul>
          <form action="" method="post"></form>
        </div>
      </div>
    </ProfileStyle>
  );
}

export default Profile;
