import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import DatePicker from "../UI/DatePicker";
import PassengersCount from "../passengersCount/PassengersCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  getFlights,
  getAirports,
  setSelectedFligtToLocalStorage,
} from "../../utils/common";

const FlightSelect = () => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const flights = getFlights();
  const options = getAirports();

  const handleContinueClick = () => {
    const originAirport = localStorage.getItem("originAirport");
    const destinationAirport = localStorage.getItem("destinationAirport");
    if (!originAirport || !destinationAirport) {
      setHasError(true);
    } else {
      setHasError(false);
      setSelectedFligtToLocalStorage();
      if (JSON.parse(localStorage.getItem("selectedFlights")).length === 0) {
        localStorage.setItem("errorStatus", "error");
        navigate("/result");
      } else {
        localStorage.removeItem("errorStatus");
        navigate("/flights");
      }
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
