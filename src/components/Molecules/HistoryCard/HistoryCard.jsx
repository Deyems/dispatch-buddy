import React from 'react'
import { Button } from '../../Atoms';
import IconButton from '../IconButton/IconButton';
import HistoryCardStyle from './HistoryCard.style';
function HistoryCard({delivery, onShow, request, reject, accept}) {
  return (
    <HistoryCardStyle>
      <div className="trip-info">
        <p>{delivery?.userName}</p>
        {/* <p>{delivery?.price}</p> */}
        <p>$ 3,500</p>
        {/* <p>{delivery?.weight}</p> */}
        <p>5kg</p>
        <p>{delivery?.pickupLocation}</p>
      </div>
      {!request && (
        <div className="rating-btn" onClick={onShow}>
          <IconButton>Rate</IconButton>
        </div>
      )}
      {request && (
        <div className="accept-reject">
          <Button className="history-btn" onClick={accept}>Accept</Button>
          <Button className="history-btn outline" onClick={reject}>
            Reject
          </Button>
        </div>
      )}
    </HistoryCardStyle>
  );
}

export default HistoryCard