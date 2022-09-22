import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NavBar } from "../components/Molecules";
function Profile() {
    const [state, dispatch] = useContext(AuthContext);
    console.log(state);
  const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      
  };


  return (
    <div>
      <NavBar/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
