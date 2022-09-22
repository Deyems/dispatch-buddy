import styled from "styled-components";

const RiderRequestFormStyle = styled.div`
  // display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  // box-shadow: 0px 0px 5px grey;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem 2rem;
  .wrapper{
    // border: 1px solid blue;
    padding: 5px;
  }
  form{
    // border: 1px solid yellow;
    width: 100%;
  }
  #bottom{
    // border: 1px solid green;
  }
  .cancel_request{
    margin-left: 8px;
    color: #580aff;
    font-weight: 700;
    cursor: pointer;
  }

`

export default RiderRequestFormStyle;