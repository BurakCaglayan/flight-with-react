import Dropdown from "../UI/Dropdown";

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
      <div>
        <Dropdown labelText={"Nereden"} options={options} searchBy={"name"} />
      </div>
      <div>
        <Dropdown labelText={"Nereye"} options={options} searchBy={"name"} />
      </div>
      <div>Date area</div>
      <div>Count area</div>
      <div>Button</div>
    </div>
  );
};

export default FlightSelect;
