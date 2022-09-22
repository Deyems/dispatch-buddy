import styled from "styled-components";

const EditProfileStyle = styled.div`
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
    .profile_header{
      // border: 1px solid red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.6rem 0;
      padding: 0.5rem 0;
      // border-bottom: 1px solid grey;
      h1 {
        // margin-left: 2rem;
      }
    }
    form{
        // border: 1px solid yellow;
        padding: 1rem 0;
    }
    .back_btn{
        // width: 200px;
        // margin: auto 22.5%;
        cursor: pointer;
        color: #580AFF;
    }
    h1 {
    //   width: 44%;
    // border: 1px solid blue;
      // margin: 1rem auto;
      // margin-bottom: 1rem;
      font-size: 1.23rem;
      text-align: left;
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
     .select_grp{
      //  border: 2px solid red;
      margin-bottom: 1rem;
      select {
         width: 100%;
        /* styling */
        background-color: transparent;
        // border: thin solid blue;
        // border-radius: 4px;
        display: inline-block;
        font: inherit;
        line-height: 1.5em;
        padding: 0.5em 3.5em 0.5em 1em;
        outline: none;
        // border: none;
        border: 1px solid #d9d9d9;
        margin-top: 0.7rem;
        // border: 2px solid red;
        
        /* reset */
        margin: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
      }
       .classic{
        background-image:
        linear-gradient(45deg, transparent 50%, #580AFF 50%),
        linear-gradient(135deg, #580AFF 50%, transparent 50%),
        linear-gradient(to right, transparent, transparent);
      background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        100% 0;
      background-size:
        5px 5px,
        5px 5px,
        2.5em 2.5em;
      background-repeat: no-repeat;
      margin-top: 0.6rem;
      // border: 2px solid yellow;
       }
       .classic:focus {
        background-image:
          linear-gradient(45deg, white 50%, transparent 50%),
          linear-gradient(135deg, transparent 50%, white 50%),
          linear-gradient(to right, gray, gray);
        background-position:
          calc(100% - 15px) 1em,
          calc(100% - 20px) 1em,
          100% 0;
        background-size:
          5px 5px,
          5px 5px,
          2.5em 2.5em;
        background-repeat: no-repeat;
        // border-color: grey;
        outline: 0;
      }
      
     }
    @media (max-width: 500px) {
      width: 80%;
      h1 {
        width: 80%;
      }
    }
  }
`;

export default EditProfileStyle;
