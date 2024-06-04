import { useEffect, useState } from "react";
import FlightsList from "./components/FlightsList";
import Header from "../../components/header/Header";
import ToggleButton from "../../components/UI/ToggleButton";
import { removeSelectedAirportsFromStorage } from "../../utils/common";

const Flights = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { originAirport, destinationAirport } = JSON.parse(
    localStorage.getItem("selectedFlights")
  )[0];
  const passengersSelections = JSON.parse(
    localStorage.getItem("passengersSelections")
  );

  removeSelectedAirportsFromStorage();

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
            <ToggleButton setIsToggle={setIsToggle} />
          </div>
        </div>
        {isToggle && (
          <>
            <div>
              Promosyon Kodu seçeneği ile Tüm Economy kabini Eco Fly paketlerini
              %50 indirimle satın alabilirsiniz!
            </div>
            <div>
              Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
              yapılamamaktadır
            </div>
          </>
        )}
        <div>
          <FlightsList isToggle={isToggle} />
        </div>
      </div>
    </div>
  );
};

export default Flights;
