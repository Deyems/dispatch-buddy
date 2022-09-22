import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  
  border-color: #fff;
  outline: #fff;
  border-style: solid;
   ::placeholder {
    color: #c4c4c4;
  }
  ::-ms-input-placeholder {
    color: #c4c4c4;
  }
  ::-webkit-input-placeholder {
    color: #c4c4c4;
  }
  :-moz-placeholder {
    color: #c4c4c4;
  }
`;
export default Input