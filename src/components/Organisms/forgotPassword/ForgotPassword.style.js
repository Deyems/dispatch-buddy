import styled from "styled-components";

const ForgotPasswordStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
  padding-top: 2rem;
  font-size: 0.8rem;
  .wrapper {
    width: 52%;
    background-color: #fff;
    margin: auto;
    padding: 2.9rem 0;
    .header-text-wrap{
      // border: 1px solid yellow;
      width: 55%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .back{
        cursor: pointer;
        color: #580AFF;
      }
    }

    h1 {
      // width: 44%;
      // margin: auto;
      font-size: 1.13rem;
    }
    #bottom {
      text-align: center;
      a {
        color: #580aff;
        font-weight: 700;
      }
    }
    #forgotpassword-description {
        margin-bottom: 2rem;
        color: #21334f; 
        font-size: 0.69rem; 
     }
    @media (max-width: 500px) {
      width: 80%;
      h1 {
        width: 80%;
      }
    }
  }
`;

export default ForgotPasswordStyle;
