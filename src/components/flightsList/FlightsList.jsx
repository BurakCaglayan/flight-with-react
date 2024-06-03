import Card from "../UI/Card";

const FlightsList = () => {
  return (
    <div className="flightsList">
      <div className="flightsList__header">
        <div className="flightsList__header__label">Sıralama Kriteri</div>
        <button className="flightsList__header__button">Ekonomi Ücreti</button>
        <button className="flightsList__header__button">Kalkış Saati</button>
      </div>
      <div className="flightsList__body">
        <div className="flightsList__body__item">
          <Card className={"flightsList__body__item-info"}></Card>
          <Card className={"flightsList__body__item-select"}></Card>
          <Card className={"flightsList__body__item-select"}></Card>
        </div>
        <div className="flightsList__body__item">
          <Card className={"flightsList__body__item-info"}></Card>
          <Card className={"flightsList__body__item-select"}></Card>
          <Card className={"flightsList__body__item-select"}></Card>
        </div>
      </div>
    </div>
  );
};

export default FlightsList;
