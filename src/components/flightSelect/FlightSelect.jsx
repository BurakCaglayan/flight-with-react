import Dropdown from "../UI/Dropdown";
import DatePicker from "../UI/DatePicker";
import PassengersCount from "../passengersCount/PassengersCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FlightSelect = () => {
  const options = [
    { id: 1, name: "İstanbul" },
    { id: 2, name: "Ankara" },
    { id: 3, name: "Antalya" },
    { id: 4, name: "İzmir" },
    { id: 5, name: "Bursa" },
  ];
  return (
    <div className="flight-select">
      <Dropdown
        labelText={"Nereden"}
        options={options}
        searchBy={"name"}
        className={"flight-select__dropdown"}
      />
      <Dropdown
        labelText={"Nereye"}
        options={options}
        searchBy={"name"}
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
