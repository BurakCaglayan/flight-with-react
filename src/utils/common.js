import flightsData from "./flights.json";
import airportsData from "./airports.json";

export const searchFilter = ({ searchValue, list, searchBy = "name" }) => {
  let lowerCaseQuery = searchValue.toLowerCase();
  let filteredList = searchValue
    ? list.filter((x) => x[searchBy].toLowerCase().includes(lowerCaseQuery))
    : list;
  return filteredList;
};

export const getFlights = () => flightsData.flights;

export const getAirports = () => airportsData.airports;

export const findSelectedFlights = () => {
  const originAirport = JSON.parse(localStorage.getItem("originAirport"));
  const destinationAirport = JSON.parse(
    localStorage.getItem("destinationAirport")
  );
  return getFlights()?.filter(
    (flight) =>
      flight.originAirport.name === originAirport.name &&
      flight.destinationAirport.name === destinationAirport.name
  );
};

export const setSelectedFligtToLocalStorage = () => {
  const selectedFlights = findSelectedFlights();
  localStorage.setItem("selectedFlights", JSON.stringify(selectedFlights));
};

export const getSelectedFligtFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("selectedFlights"));

export const sortFlights = () =>
  getSelectedFligtFromLocalStorage()?.sort(
    (a, b) =>
      a.fareCategories.ECONOMY.subcategories[0].price.amount -
      b.fareCategories.ECONOMY.subcategories[0].price.amount
  );

export const getFlyPrice = (flight, selector) =>
  flight.fareCategories[selector].subcategories[0].price;

export const removeSelectedAirportsFromStorage = () => {
  localStorage.removeItem("originAirport");
  localStorage.removeItem("destinationAirport");
};
