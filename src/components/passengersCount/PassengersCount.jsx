import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "../UI/RadioButton";

const PassengersCount = ({ className }) => {
  const [selectedFlightClass, setSelectedFlightClass] = useState("Eco");
  const [passengersCount, setPassengersCount] = useState(1);

  const onChangeRadioValue = (e) => {
    setSelectedFlightClass(e.target.value);
  };

  return (
    <div className="passengers-count">
      <span className="passengers-count__span">{passengersCount}</span>
      <button className="passengers-count__button">
        <FontAwesomeIcon
          icon={passengersCount > 1 ? faPeopleGroup : faPerson}
        />
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
            <div>
              <button
                className="passengers-count__tooltip__footer__button"
                onClick={() =>
                  passengersCount > 1 && setPassengersCount(passengersCount - 1)
                }
              >
                -
              </button>
              <span>{passengersCount}</span>
              <button
                className="passengers-count__tooltip__footer__button"
                onClick={() => setPassengersCount(passengersCount + 1)}
              >
                +
              </button>
            </div>
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
