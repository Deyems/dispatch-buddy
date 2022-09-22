import styled from "styled-components";

const RidersLocationStyle = styled.main`
  width: 100%;
  .intro {
    display: flex;
    justify-content: space-between;
    // margin-bottom: 6rem;

    .image-container {
      width: 48%;
      position: relative;
      .shadow {
        height: 86%;
        width: 94%;
        position: absolute;
        bottom: 0.01rem;
        right: 0.01rem;
      }
    }
      .forms {
        width: 48%;
        padding-top: 2rem;
        font-size: 0.8rem;
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
          padding: 3rem 0;
          padding: ${(props) => (props.locator ? "4rem 0" : "3rem 0")};
          display: flex;
          flex-direction: column;
          margin: auto;
          p {
            align-self: flex-start;
                }
            }
  }
  
  @media (max-width: 760px) {
    .intro {
      flex-direction: column;
      align-items: center;
      .text,
      .image-container {
        width: 100%;
      }
      .text {
        margin-bottom: 2rem;
        h3 {
          width: 100%;
        }
      }
    }
    .search-riders {
      .text {
        p,
        h4,
        h3 {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .intro {
      .text {
        h3 {
          font-size: 3rem;
        }
      }
    }
  }
  @media (max-width: 320px) {
  }
`;

export default RidersLocationStyle;
