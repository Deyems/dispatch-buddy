import styled from "styled-components";

const MyDeliveriesStyle = styled.main`
  width: 100%;
  position: relative;
  .none {
    text-align: center;
  }
  h2 {
    font-size: 2.3rem;
    line-height: 2.79rem;
  }

  .banner {
    width: 100%;
    color: #580aff;
    padding: 3.58rem 0 3.58rem 16.53rem;
    background: rgba(88, 10, 255, 0.1);
    // border: 1px solid #580aff;
    margin-top: 7.6rem;
  }
  #deliveries {
    padding-left: 16.53rem;
    padding-right: 16.53rem;
    margin-top: 0;
    h5 {
      margin: 5rem 0 2rem;
      font-size: 1.33rem;
    }
    .today h5 {
      margin-top: 0;
    }
  }
`;

export default MyDeliveriesStyle;
