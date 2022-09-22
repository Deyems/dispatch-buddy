import CardStyle from "./Card.style";

function Card({label}) {
    return (
      <CardStyle >
          <input type="radio" className="card-radio"/>
          <div className="card-label">{label}</div>
     </CardStyle>
  );
}

export default Card;