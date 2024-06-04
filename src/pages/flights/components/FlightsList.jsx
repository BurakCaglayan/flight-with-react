import { useState } from "react";
import Card from "../../../components/UI/Card";
import FlightClassSelect from "./FlightClassSelect";
import FlightInfo from "./FlightInfo";
import FlightSelectCard from "./FlightSelectCard";

const FlightsList = () => {
  const [selectedFlightClass, setSelectedFlightClass] = useState();
  const [selectedFlightName, setSelectedFlightName] = useState();
  const [selectedFlight, setSelectedFlight] = useState();

  const selectedFlights = JSON.parse(localStorage.getItem("selectedFlights"));

  const onChangeRadioValue = (e, item) => {
    setSelectedFlightClass(e.target.value);
    setSelectedFlightName(e.target.name);
    setSelectedFlight(item);
  };

  return (
    <div className="flightsList">
      <div className="flightsList__header">
        <div className="flightsList__header__label">Sıralama Kriteri</div>
        <button className="flightsList__header__button">Ekonomi Ücreti</button>
        <button className="flightsList__header__button">Kalkış Saati</button>
      </div>
      <div className="flightsList__body">
        {selectedFlights.map((flight, index) => (
          <div key={`flight_${index}`}>
            <div className="flightsList__body__item">
              <Card className={"flightsList__body__item-info"}>
                <FlightInfo flight={flight} />
              </Card>
              <Card className={"flightsList__body__item-select"}>
                <FlightClassSelect
                  value={"ECONOMY"}
                  name={`radioClassSelect_${index}`}
                  checked={
                    selectedFlightClass === "ECONOMY" &&
                    selectedFlightName === `radioClassSelect_${index}`
                  }
                  label={"ECONOMY"}
                  onChangeRadioValue={onChangeRadioValue}
                  item={flight}
                />
              </Card>
              <Card className={"flightsList__body__item-select"}>
                <FlightClassSelect
                  value={"BUSINESS"}
                  name={`radioClassSelect_${index}`}
                  checked={
                    selectedFlightClass === "BUSINESS" &&
                    selectedFlightName === `radioClassSelect_${index}`
                  }
                  label={"BUSINESS"}
                  onChangeRadioValue={onChangeRadioValue}
                  item={flight}
                />
              </Card>
            </div>
            <Card className={"flightsList__body__select-card"}>
              {((selectedFlightClass === "BUSINESS" &&
                selectedFlightName === `radioClassSelect_${index}`) ||
                (selectedFlightClass === "ECONOMY" &&
                  selectedFlightName === `radioClassSelect_${index}`)) &&
                flight.fareCategories[selectedFlightClass].subcategories.map(
                  (item, index) => (
                    <FlightSelectCard key={`list_${index}`} item={item} />
                  )
                )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightsList;
