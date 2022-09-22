import styled from "styled-components";

const RiderHistoryCardStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 2.66rem;
  padding: 1.5rem 2.8rem;
  font-size: 1.33rem;
  .rider-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .rider-info_left {
    display: flex;
    width: 50%;
    justify-content: flex-start;
  }
  .rider-info_details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    .rider-info-name  {
      font-weight: bold
    }
    p {
      margin-top: 10px;
    }
  }
  .rider-info_img {
    border-radius: 50%;
    border-style: none;
    background-size: contain;
    background-position: center;
    
  }
  .rider-info_image {
    object-fit: contain;
  }
  .rider-info_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default RiderHistoryCardStyle;