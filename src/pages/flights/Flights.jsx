import FlightsList from "./components/FlightsList";
import Header from "../../components/header/Header";
import ToggleButton from "../../components/UI/ToggleButton";

const Flights = () => {
  const { originAirport, destinationAirport } = JSON.parse(
    localStorage.getItem("selectedFlights")
  )[0];
  const passengersSelections = JSON.parse(
    localStorage.getItem("passengersSelections")
  );
  const originCityName = originAirport.city.name;
  const destinationCityName = destinationAirport.city.name;
  const { count } = passengersSelections;
  return (
    <div className="flights">
      <Header className={"header__dark"} />
      <div className="flights__container">
        <small className="flights__title">Uçuş</small>
        <div className="flights__info">{`${originCityName} - ${destinationCityName}, ${count} yolcu
        `}</div>
        <div className="flights__promo">
          <small className="flights__promo__title">Promosyon kodu</small>
          <div>
            <ToggleButton />
          </div>
        </div>
        <div>
          <FlightsList />
        </div>
      </div>
    </div>
  );
};

export default Flights;
