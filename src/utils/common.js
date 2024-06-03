import flightsData from "./flights.json";

export const searchFilter = ({ searchValue, list, searchBy = "name" }) => {
  let lowerCaseQuery = searchValue.toLowerCase();
  let filteredList = searchValue
    ? list.filter((x) => x[searchBy].name.toLowerCase().includes(lowerCaseQuery))
    : list;
  return filteredList;
};

export const getFlights = () => flightsData.flights;
