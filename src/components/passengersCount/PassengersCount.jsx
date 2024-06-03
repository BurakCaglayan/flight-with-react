import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "../UI/RadioButton";

const PassengersCount = ({ className }) => {
  const [selectedFlightClass, setSelectedFlightClass] = useState("Eco");

  const onChangeRadioValue = (e) => {
    setSelectedFlightClass(e.target.value);
  };

  return (
    <div className="passengers-count">
      <span className="passengers-count__span">1</span>
      <button className="passengers-count__button">
        <FontAwesomeIcon icon={faPerson} />
      </button>
      <div className="passengers-count__tooltip">
        <div className="passengers-count__tooltip__content">
          <div>Kabin ve yolcu seçimi</div>
          <div className="passengers-count__tooltip__radio-group">
            <RadioButton
              value="Eco"
              name="flightClass"
              checked={selectedFlightClass === "Eco"}
              onChangeValue={onChangeRadioValue}
              label="Eco"
            />
            <RadioButton
              value="Bus"
              name="flightClass"
              checked={selectedFlightClass === "Bus"}
              onChangeValue={onChangeRadioValue}
              label="Bus"
            />
          </div>
          <div className="passengers-count__tooltip__footer">
            <div className="passengers-count__tooltip__footer__label">
              Yolcu
            </div>
            <button className="passengers-count__tooltip__footer__button">
              -
            </button>
            <button className="passengers-count__tooltip__footer__button">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PassengersCount.propTypes = {
  className: PropTypes.string,
};

export default PassengersCount;
