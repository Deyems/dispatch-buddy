import React from "react";
import { Logo } from "../../Atoms";
import NavText from "../../Atoms/NavText";
import NavBarStyle from "./NavBar.style";
import data from "./NavData.json";
const { REACT_APP_AUTH_TOKEN } = process.env;


function NavBar() {
  const navData = localStorage.getItem(REACT_APP_AUTH_TOKEN) ? "registered" : "unregistered"
console.log(navData)
  return (
    <NavBarStyle>
      <div className="navbar-left">
        <Logo />
      </div>
      <nav className="navbar-right">
        {data[navData].map((info, index) => {
          return info.text !== "dp" ? (
            <NavText key={index} fill={info.fill} to={info.path}>
              {info.text}
            </NavText>
          ) : (
            <NavText
              key={index}
              to={info.path}
              id="image"
            >
              <p>{info.text}</p>
            </NavText>
          );
        })}
      </nav>
      <div className="hamburger-menu"></div>
    </NavBarStyle>
  );
}

export default NavBar;
