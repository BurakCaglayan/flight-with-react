import { useState } from "react";
import Dropdown from "../UI/Dropdown";
import DatePicker from "../UI/DatePicker";
import PassengersCount from "../passengersCount/PassengersCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getFlights, getAirports } from "../../utils/common";

const FlightSelect = () => {
  const [hasError, setHasError] = useState(false);
  const flights = getFlights();
  const options = getAirports();

  const handleContinueClick = () => {
    const originAirport = localStorage.getItem("originAirport");
    const destinationAirport = localStorage.getItem("destinationAirport");
    if (!originAirport || !destinationAirport) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return (
    <>
      <div className="flight-select">
        <Dropdown
          labelText={"Nereden"}
          options={options}
          searchBy={"name"}
          className={"flight-select__dropdown"}
          type={"originAirport"}
        />
        <Dropdown
          labelText={"Nereye"}
          options={options}
          searchBy={"name"}
          className={"flight-select__dropdown"}
          type={"destinationAirport"}
        />
        <DatePicker />
        <PassengersCount />
        <button
          className="flight-select__button__continue"
          onClick={handleContinueClick}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {hasError && (
        <div className="flight-select__alert">
          Lütfen kalkış ve varış noktalarını seçin
        </div>
      )}
    </>
  );
};

export default FlightSelect;
