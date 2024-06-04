import PropTypes from "prop-types";
import Card from "../../../components/UI/Card";

const FlightSelectCard = ({ className, title, price, item }) => {
  return (
    <div className={`flight-select-card ${className}`}>
      <div className="flight-select-card__header">
        <div className="flight-select-card__header__tittle">{title}</div>
        <div className="flight-select-card__price">
          <div>TRY</div>
          <div>{price}</div>
        </div>
      </div>
      <div className="flight-select-card__body">
        <div className="flight-select-card__body__item">{item}</div>
      </div>
      <div className="flight-select-card__footer">
        <button className="flight-select-card__button">Uçuşu Seç</button>
      </div>
    </div>
  );
};

FlightSelectCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  item: PropTypes.string,
};

export default FlightSelectCard;
