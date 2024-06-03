import Header from "../../components/header/Header";
import FlightSelect from "../../components/flightSelect/FlightSelect";

const Home = () => {
  return (
    <div className="home">
      <Header className={"header__light"} />
      <div className="home__welcome">
        <h2>Merhaba</h2>
        <span>Nereyi keşfetmek istersiniz?</span>
      </div>
      <FlightSelect />
    </div>
  );
};

export default Home;
