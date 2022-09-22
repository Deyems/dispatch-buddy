import styled from "styled-components";

const HistoryCardStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 2.66rem;
  padding: 0 3.3rem;
  font-size: 1.33rem;
  .trip-info {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  .trip-info p {
    width: 20%;
  }
  .trip-info p:nth-child(1) {
    width: 24%;
  }
  .rating-btn {
    width: 10%;
    height: 56.75%;
  }
  /* .rating-btn:hover {
    background-color: #580aff;
    color: #fff;
  } */
  .accept-reject {
    display: flex;
    width: 10em;
    justify-content: space-between;
  }
  .outline {
    background-color: #fff;
    color: #580aff;
    border: 1px solid #580aff;
  }
  .history-btn {
    border-radius: 10px;
    width: 48%;
    transition: all 0.5s;
  }

  .outline:hover,
  .history-btn:hover {
    background-color: rgba(88, 10, 255, 0.1);
    color: #580aff;
  }
`;

export default HistoryCardStyle;
