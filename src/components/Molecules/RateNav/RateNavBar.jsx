import React from "react";
import NavText from "../../Atoms/NavText";
import RateNavBarStyle from "./RateNavBar.style";
import data from "./NavData";
function RateNavBar() {
  return (
    <RateNavBarStyle>
      <nav className="navbar-center">
        {data.data.map((info, index) => {
          console.log(info);
          return (
            <NavText key={index} fill={info.fill} to={info.path}>
              <h1>{info.text}</h1>
            </NavText>
          );
        })}
      </nav>
    </RateNavBarStyle>
  );
}

export default RateNavBar;
