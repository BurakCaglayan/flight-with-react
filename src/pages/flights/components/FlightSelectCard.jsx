import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const FlightSelectCard = ({ className, item, isToggle }) => {
  const navigate = useNavigate();

  const { brandCode, price, rights } = item;
  const amount =
    isToggle && brandCode === "ecoFly" ? price.amount / 2 : price.amount;

  const handleFlightSelectClick = () => {
    const finalPrice = {
      amount,
      currency: price.currency,
    };
    localStorage.setItem("finalPrice", JSON.stringify(finalPrice));
    navigate("/result");
  };

  return (
    <div className={`flight-select-card ${className}`}>
      <div className="flight-select-card__header">
        <div className="flight-select-card__header__tittle">{brandCode}</div>
        <div className="flight-select-card__price">
          <div>{price.currency}</div>
          <div>{amount}</div>
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
        <button
          className={"flight-select-card__button"}
          onClick={handleFlightSelectClick}
          disabled={isToggle && brandCode !== "ecoFly"}
        >
          Uçuşu Seç
        </button>
      </div>
    </div>
  );
};

FlightSelectCard.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({}),
  isToggle: PropTypes.bool,
};

export default FlightSelectCard;
