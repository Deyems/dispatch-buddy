import styled from "styled-components";

const NavBarStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 13.2%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 5;
  overflow: hidden;
  .navbar-right {
    width: 36%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #image{
      height: 34px;
      width: 36px;
      border-radius: 50%;
      background-color: purple;
      color: #fff;
      padding: .5rem;
      p{
        margin: auto;
      }
    }
  }
  .hamburger-menu {
    display: none;
  }
  @media (max-width: 1240px) {
    padding: 0.6rem 6.88rem;
  }
  .navbar-left {
    max-width: 20%;
  }
  .navbar-right {
    width: 38%;
  }
  @media (max-width: 1130px) {
    padding: 0.6rem 4.88rem;
  }
  @media (max-width: 1080px) {
    .navbar-right {
      width: 40%;
    }
  }
  @media (max-width: 860px) {
    .navbar-right {
      display: none;
    }
    .hamburger-menu {
      width: 2rem;
      height: 2rem;
      border: 1px solid #000;
      display: initial;
    }
  }
`;

export default NavBarStyle;
