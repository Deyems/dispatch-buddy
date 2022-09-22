import React from "react";
import { Logo } from "../../Atoms";
import NavText from "../../Atoms/NavText";
import NavBarStyle from "./NavBar.style";
import data from "./NavData";
function RNavBar() {
  return (
    <NavBarStyle>
      <div className="navbar-left">
        <Logo />
      </div>
      <nav className="navbar-right">
        {data.data.map((info, index) => {
          console.log(info);
          return (
            <NavText key={index} fill={info.fill} to={info.path}>
              {info.text}
            </NavText>
          );
        })}
      </nav>
      <div className="hamburger-menu"></div>
    </NavBarStyle>
  );
}

export default RNavBar;
