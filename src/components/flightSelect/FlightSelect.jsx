import Dropdown from "../UI/Dropdown";
import DatePicker from "../UI/DatePicker";
import PassengersCount from "../passengersCount/PassengersCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getFlights } from "../../utils/common";

const FlightSelect = () => {
  const options = getFlights();

  return (
    <div className="flight-select">
      <Dropdown
        labelText={"Nereden"}
        options={options}
        searchBy={"originAirport"}
        className={"flight-select__dropdown"}
      />
      <Dropdown
        labelText={"Nereye"}
        options={options}
        searchBy={"destinationAirport"}
        className={"flight-select__dropdown"}
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
