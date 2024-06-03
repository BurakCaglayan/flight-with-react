import Dropdown from "../UI/Dropdown";
import DatePicker from "../UI/DatePicker";
import PassengersCount from "../passengersCount/PassengersCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getFlights, getAirports } from "../../utils/common";

const FlightSelect = () => {
  const flights = getFlights();
  const options = getAirports();

  return (
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
      <button className="flight-select__button__continue">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default FlightSelect;
