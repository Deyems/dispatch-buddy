import styled from "styled-components";


export const IconButtonStyle = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #580aff;
  border-radius: 0.6rem;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  /* position: relative; */
  .button-wrapper {
    width: 50%;
    cursor: pointer;

    button {
      margin-top: 0;
      padding-left: 0;
      background-color: transparent;
      transition: all 0.5sec;
      cursor: pointer;
    }
    /* button:hover {
      background-color: #580aff;
      color: #fff;
    } */
  }

  .icon {
    width: 1.4rem;
    height: 1.4rem;
    width: 20%;
    /* margin: auto; */
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%); */
    svg {
    }
  }
`;