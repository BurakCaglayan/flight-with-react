import Dropdown from "../UI/Dropdown";
import DatePicker from "../UI/DatePicker";

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
      <div className="flight-select__dropdown">
        <Dropdown labelText={"Nereden"} options={options} searchBy={"name"} />
      </div>
      <div className="flight-select__dropdown">
        <Dropdown labelText={"Nereye"} options={options} searchBy={"name"} />
      </div>
      <div>
        <DatePicker />
      </div>
      <div>Count area</div>
      <div>Button</div>
    </div>
  );
};

export default FlightSelect;
