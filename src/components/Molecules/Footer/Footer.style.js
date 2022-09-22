import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #1a1a1a;
  padding: 3rem 13.2% 1.9rem;
  .footer-bottom {
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(245, 250, 250, 0.2);
    padding-top: 0.5rem;
    .footer-icons {
      width: 15%;
      display: flex;
      justify-content: space-between;
      .icon-wrapper {
        width: 20%;
      }
    }
  }
  @media (max-width: 540px) {
    .footer-bottom {
      flex-direction: column-reverse;
      .footer-icons {
      width: 60%;
      margin-bottom: 1.2rem;
    }
    }
  }
`;
