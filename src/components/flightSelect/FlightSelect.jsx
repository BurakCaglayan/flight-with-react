import Dropdown from "../UI/Dropdown";
import DatePicker from "../UI/DatePicker";
import PassengersCount from "../passengersCount/PassengersCount";

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
      <div>Button</div>
    </div>
  );
};

export default FlightSelect;
