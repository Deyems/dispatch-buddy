import styled from "styled-components";

const Form = styled.form`
  width: 55.48%;
  padding: 3rem 0;
  // border: 2px solid green;
  padding: ${(props) => (props.locator ? "4rem 0" : "3rem 0")};

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: auto;
  p {
    align-self: flex-start;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export default Form;
