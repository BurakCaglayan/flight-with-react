import FlightsList from "../../components/flightsList/FlightsList";
import Header from "../../components/header/Header";

const Flights = () => {
  // console.log(JSON.parse(localStorage.getItem("selectedFlights")));
  return (
    <div className="flights">
      <Header className={"header__dark"} />
      <div className="flights__container">
        <small className="flights__title">Uçuş</small>
        <div className="flights__info">İstanbul Antalya 6 yolcu</div>
        <div className="flights__promo">
          <small className="flights__promo__title">Promosyon kodu</small>
          <div>Switch button</div>
        </div>
        <div>
          <FlightsList />
        </div>
      </div>
    </div>
  );
};

export default Flights;
