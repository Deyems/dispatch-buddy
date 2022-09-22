import styled from "styled-components";

const PlaceLandingStyle = styled.div`
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
//   padding: 0 2em;
  h1 {
    width: 100%;
  }
  .forms {
    width: 100%;
    // padding-top: 2rem;
    // border: 2px solid red;
    font-size: 0.8rem;
    label{
        // border: 1px solid green;
        // margin-left: 2.4rem;
        font-size: 1rem;
        line-height: 22px;
        color: #1A1A1A;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      color: #C4C4C4;
    }
    .card-wrapper{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .form-style {
      width: 100%;
    //   padding: 3rem 0;
    //   border: 1px solid yellow;
      padding: ${(props) => (props.locator ? "4rem 0" : "3rem 0")};
      display: flex;
      flex-direction: column;
      margin: auto;
    p {
      align-self: flex-start;
      }
    }
}
  .location-search-input {
    line-height: 2rem;
    padding: 0;
    font-size: 1rem;
  }
  .form-style{
    input{
      padding: 0.5rem 0.7rem;
    //   margin-bottom: 0.7rem;
    width: 100%;
    border: none;
    outline: none;
    }
    // border: 1px solid red;
  }
  .box-wrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    // border: 3px solid blue;
    .box{
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0.5rem 0.5rem 0.75rem;
      background: rgba(0, 0, 0, 0.04);
      span{
        font-size: 0.75rem;
      }
    }
    .closer{
      font-size: 0.65rem;
      color: red;
    //   margin-left: 0.45rem;
    }
  }
  .btn-submit{
    cursor: pointer;
  }
`;

export default PlaceLandingStyle;
