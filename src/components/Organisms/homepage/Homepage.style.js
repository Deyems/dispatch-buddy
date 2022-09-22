import styled from "styled-components";

const HomepageStyle = styled.main`
  width: 100%;
  h3 {
    color: #580aff;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.3rem;
    line-height: 2.14rem;
  }
  .intro {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
    .text {
      width: 48%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        font-size: 4.6rem;
        line-height: 5.7rem;
      }
    }
    .image-container {
      width: 48%;
      position: relative;
      .shadow {
        height: 86%;
        width: 94%;
        box-shadow: 8px 8px 0 5px rgba(88, 10, 255, 0.3);
        position: absolute;
        bottom: 0.01rem;
        right: 0.01rem;
      }
    }
  }
  .search-riders {
    .text {
      text-align: center;
      h4 {
        color: rgba(0, 0, 0, 0.24);
        line-height:1.57rem;
        font-size:1.29rem;
        text-transform: uppercase;
      }
      h3 {
        font-size: 2.86rem;
        line-height: 3.43rem;
        margin: auto;
      }
      p {
        width: 37rem;
        margin: auto;
        margin-bottom: 1.7rem;
        weight: 500;
      }
    }
    .locator {
      width: 100%;
      background-color: rgba(16, 24, 40, 0.05);
      padding: 1.5rem 0;
      border-radius: 1.5rem;
      /* .locator-input {
        border-radius: 0.25rem;
      } */
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

export default HomepageStyle;
