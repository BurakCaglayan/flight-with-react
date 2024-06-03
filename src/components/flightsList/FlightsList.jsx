const FlightsList = () => {
  return (
    <div className="flightsList">
      <div className="flightsList__header">
        <div className="flightsList__header__label">Sıralama Kriteri</div>
        <button className="flightsList__header__button">Ekonomi Ücreti</button>
        <button className="flightsList__header__button">Kalkış Saati</button>
      </div>
      <div className="flightsList__body">Flights List Body</div>
    </div>
  );
};

export default FlightsList;
