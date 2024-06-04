import PropTypes from "prop-types";
import Card from "../../../components/UI/Card";

const FlightSelectCard = ({ className, item }) => {
  const { brandCode, price, rights } = item;
  return (
    <div className={`flight-select-card ${className}`}>
      <div className="flight-select-card__header">
        <div className="flight-select-card__header__tittle">{brandCode}</div>
        <div className="flight-select-card__price">
          <div>{price.currency}</div>
          <div>{price.amount}</div>
        </div>
      </div>
      <div className="flight-select-card__body">
        {rights.map((right, index) => (
          <div
            key={`right_${index}`}
            className="flight-select-card__body__item"
          >
            {right}
          </div>
        ))}
      </div>
      <div className="flight-select-card__footer">
        <button className="flight-select-card__button">Uçuşu Seç</button>
      </div>
    </div>
  );
};

FlightSelectCard.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({}),
};

export default FlightSelectCard;
