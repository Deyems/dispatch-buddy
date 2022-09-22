import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background: ${(props) =>
    props.outlined || props.icon ? "#FFFFFF" : "#580AFF"};
  color: ${(props) => (props.outlined || props.icon ? "#580AFF" : "#FFFFFF")};
  border-radius: ${(props) => (props.outlined ? ".5rem" : "0")};
  border-color:${(props) => (props.icon ? "#FFFFFF" : "#580AFF")};
  outline: :${(props) => (props.icon ? "#FFFFFF" : "#580AFF")};
  border-style: solid;
  padding: 0.8rem;
  margin-top: 1.14rem;
  cursor: pointer;
  :hover{
    background: ${(props) =>
      props.outlined || props.icon ? "#580AFF" : "#FFFFFF"};
    color: ${(props) => (props.outlined || props.icon ? "#FFFFFF" : "#580AFF")};
  }
  transition: background 0.05s;
`;

export default Button;
