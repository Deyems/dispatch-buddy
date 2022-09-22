import React from "react";
import { Image, Logo } from "../../Atoms";
import { FooterStyle } from "./Footer.style";
import { footerIcons } from "./footerLinks";
function Footer() {
  return (
    <FooterStyle>
          <div className="logo">
              <Logo fillText="#fff" fillIcon="#fff"/>
      </div>
      <div className="footer-bottom">
        <div className="copywrite">
          © 2022 DispatchBuddy. All rights reserved
        </div>
        <div className="footer-icons">
          {footerIcons.map((icon, index) => {
              return (
                <a className="icon-wrapper" href="www">
                  <Image key={index} src={icon.icon} alt={icon.alt} />
                </a>
              );
          })}
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
