const FlightInfo = ({ flight }) => {
  const {
    arrivalDateTimeDisplay,
    departureDateTimeDisplay,
    flightDuration,
    originAirport,
    destinationAirport,
  } = flight;
  return (
    <div className="flight-info">
      <div className="flight-info__dep">
        <div>{departureDateTimeDisplay}</div>
        <div>{originAirport.city.code}</div>
        <div>{originAirport.city.name}</div>
      </div>
      <div className="flight-info__div">
        <hr class="solid" />
      </div>
      <div className="flight-info__arr">
        <div>{arrivalDateTimeDisplay}</div>
        <div>{destinationAirport.city.code}</div>
        <div>{destinationAirport.city.name}</div>
      </div>
      <div className="flight-info__flight">
        <div>Uçuş Süresi</div>
        <div>{flightDuration}</div>
      </div>
    </div>
  );
};

export default FlightInfo;
