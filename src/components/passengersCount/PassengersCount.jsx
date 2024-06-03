import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const PassengersCount = ({ className }) => {
  const [selectedFlightClass, setSelectedFlightClass] = useState("Eco");
  return (
    <div className="passengers-count">
      <span className="passengers-count__span">1</span>
      <button>
        <FontAwesomeIcon icon={faPerson} />
      </button>
      <div className="passengers-count__tooltip">
        <div className="passengers-count__tooltip__content">
          <div>Kabin ve yolcu seçimi</div>
        </div>
      </div>
    </div>
  );
};

PassengersCount.propTypes = {
  className: PropTypes.string,
};

export default PassengersCount;
