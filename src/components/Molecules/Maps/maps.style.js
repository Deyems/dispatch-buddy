import styled from "styled-components";

const MapStyle = styled.main`
  width: 100%;
  .intro {
    display: flex;
    justify-content: flex-start;
    position: relative;
    // margin-bottom: 6rem;

    .image-container {
      margin-right: 4rem;
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

export default MapStyle;
