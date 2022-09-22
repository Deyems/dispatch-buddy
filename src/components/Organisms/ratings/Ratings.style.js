import styled from "styled-components";

const RatingsStyle = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 2rem 0;
  font-size: 0.8rem;
  display: block;
  flex-direction: column;
  background: #fff;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  position: absolute;
  .rating_header{
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
    width: 100%;
    text-align: center;
    padding-bottom: .8rem;
    margin-bottom: 2rem;
    position: relative;
    h1{
      font-size: 1rem;
    }
    svg{
      /* width: 10%; */
      position: absolute;
      right: 2%;
      bottom: 30%;
      cursor: pointer;
    }
 }
  /* justify-content: center; */
    .rate-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // text-align: center;
        h1 {
            color: #1A1A1A;
            font-size: 24px;
            line-height: 29px;
            
        }
        p {
            // width: 37rem;
            // margin: auto;
            margin: 1.7rem 0;
            font-size: 1.2rem;
            text-align: center;
            weight: 500;
            color: rgba(0, 0, 0, 0.24);
        }
        .rate {
            // margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
        }
    }

    @media (max-width: 500px) {
      width: 80%;
      h1 {
        width: 80%;
      }
    }
  }
`;

export default RatingsStyle;
