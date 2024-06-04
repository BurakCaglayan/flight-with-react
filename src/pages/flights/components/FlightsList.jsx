import { useState } from "react";
import Card from "../../../components/UI/Card";
import FlightClassSelect from "./FlightClassSelect";
import FlightInfo from "./FlightInfo";
import FlightSelectCard from "./FlightSelectCard";

const FlightsList = () => {
  const [selectedFlightClass, setSelectedFlightClass] = useState();

  const onChangeRadioValue = (e) => {
    setSelectedFlightClass(e.target.value);
  };

  return (
    <div className="flightsList">
      <div className="flightsList__header">
        <div className="flightsList__header__label">Sıralama Kriteri</div>
        <button className="flightsList__header__button">Ekonomi Ücreti</button>
        <button className="flightsList__header__button">Kalkış Saati</button>
      </div>
      <div className="flightsList__body">
        <div className="flightsList__body__item">
          <Card className={"flightsList__body__item-info"}>
            <FlightInfo />
          </Card>
          <Card className={"flightsList__body__item-select"}>
            <FlightClassSelect
              value={"ECONOMY"}
              name={"radioClassSelect"}
              checked={selectedFlightClass === "ECONOMY"}
              label={"ECONOMY"}
              onChangeRadioValue={onChangeRadioValue}
            />
          </Card>
          <Card className={"flightsList__body__item-select"}>
            <FlightClassSelect
              value={"BUSINESS"}
              name={"radioClassSelect"}
              checked={selectedFlightClass === "BUSINESS"}
              label={"BUSINESS"}
              onChangeRadioValue={onChangeRadioValue}
            />
          </Card>
        </div>
        <Card className={"flightsList__body__select-card"}>
          <FlightSelectCard
            title={"Eco Fly"}
            price={"130"}
            item={"15kg bagaj"}
          />
          <FlightSelectCard
            title={"Eco Fly"}
            price={"130"}
            item={"15kg bagaj"}
          />
          <FlightSelectCard
            title={"Eco Fly"}
            price={"130"}
            item={"15kg bagaj"}
          />
        </Card>
      </div>
    </div>
  );
};

export default FlightsList;
