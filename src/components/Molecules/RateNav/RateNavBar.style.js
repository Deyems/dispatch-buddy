import styled from "styled-components";

const RateNavBarStyle = styled.header`
  display: flex;
//   align-items: center;
  justify-content: center;
  padding: 0.6rem 13.2%;
  padding-top: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 5;
  overflow: hidden;
  /* .navbar-right {
    width: 40%;
  } */
  .navbar-center {
    // width: 36%;
    display: flex;
    // align-items: center;
    justify-content: center;
    color: #1A1A1A;
    h1 {
        font-size: 1.5rem;
        margin-top: 1rem;
    }
  }
  
  @media (max-width: 1240px) {
    padding: 0.6rem 6.88rem;
  }
  .navbar-center {
    width: 38%;
  }
  @media (max-width: 1130px) {
    padding: 0.6rem 4.88rem;
  }
  @media (max-width: 1080px) {
    .navbar-center {
      width: 40%;
    }
  }
  @media (max-width: 860px) {
    .navbar-right {
      display: none;
    }
  }
`;

export default RateNavBarStyle;
