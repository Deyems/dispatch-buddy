import styled from "styled-components";

const UpdatePasswordStyle = styled.div`
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
    form{
        // border: 1px solid yellow;
        padding: 1rem 0;
    }
    .back_btn{
        width: 200px;
        margin: auto 22.5%;
        cursor: pointer;
        color: #580AFF;
    }
    h1 {
    //   width: 44%;
      margin: 1rem auto;
      font-size: 1.23rem;
    }
    #bottom {
      text-align: center;
      a {
        color: #580aff;
        font-weight: 700;
      }
    }
    #createNewPassword-description {
        margin-bottom: 2rem;
        color: #21334f; 
        font-size: 0.69rem; 
     }
     .update_btn{
        cursor: pointer;
     }
    @media (max-width: 500px) {
      width: 80%;
      h1 {
        width: 80%;
      }
    }
  }
`;

export default UpdatePasswordStyle;
