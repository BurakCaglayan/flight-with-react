import Header from "../../components/header/Header";
import FlightSelect from "../../components/flightSelect/FlightSelect";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h2>Merhaba</h2>
      <span className="home__desc">Nereyi keşfetmek istersiniz?</span>
      <FlightSelect />
    </div>
  );
};

export default Home;
