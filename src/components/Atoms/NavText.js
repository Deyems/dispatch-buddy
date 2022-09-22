import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavText = styled(NavLink)`
  color: ${(props) => (props.fill ? "#fff" : "#1A1A1A")};
  background-color: ${(props) => (props.fill ? "#580AFF" : "#fff")};
  padding: ${(props) => (props.fill ? "0.72rem 0.81rem" : "0")};
  border-radius: 3px;
  font-size: 1rem;
  line-height: 1.18rem;
  &.${(props) => props.isActive} {
    color: #580aff;
  }
  @media (max-width: 1024px) {
    font-size: .8rem;
  }
`;

//  const NavText = styled(NavLink)`
//   color: blue;

//   &.${(props) => props.activeClassName} {
//     color: red;
//   }
// `;

export default NavText;
