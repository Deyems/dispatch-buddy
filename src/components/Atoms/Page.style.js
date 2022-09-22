import styled from "styled-components";

const PageStyle = styled.div`
  display: ${(props) => props.display || "block"};

  margin-top: 8.4rem;
  width: 100vw;
  min-height: 100vh;
  padding: 4.4rem 13.2% 6.2rem;
  @media (max-width: 1240px) {
    padding: 4.4rem 6.88rem 6rem;
  }

  @media (max-width: 1130px) {
    padding: 4.4rem 4.88rem 6.2rem;
  }
`;

export default PageStyle;
