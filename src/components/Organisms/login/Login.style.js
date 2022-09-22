import styled from "styled-components";

const LoginStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #e5e5e5;
  padding-top: 2rem;
  font-size: 0.8rem;
  .wrapper {
    width: 40%;
    background-color: #fff;
    margin: auto;
    padding: 6rem 0;

    h1 {
      width: 55.48%;
      margin: auto;
      font-size: 1.29rem;
    }
    .forgot-password{
      margin: -0.5rem 0 1.5rem;
      align-self: flex-start;
      color: #17a1fa;
    }
    #forgot-password {
      margin: -0.5rem 0 1.5rem;
      align-self: flex-start;
      color: #17a1fa;
    }
    .submit_btn{
      cursor: pointer;
    }
    #bottom {
      text-align: center;
      color:#21334F;

      span{
        cursor: pointer;
      }
      
      span, .create_account_link {
        margin-left: 8px;
        color: #580aff;
        font-weight: 700;
      }
    }
    #verification-description {
      margin-bottom: 2rem;
      color: #21334f;
    }
    @media (max-width: 500px) {
      width: 80%;
      h1,
      #bottom {
        width: 80%;
      }
    }
  }
`;

export default LoginStyle;
