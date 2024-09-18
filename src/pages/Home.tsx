import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import '../styles/Home.styles.css';

const Home = () => {
  return (
    <div className="home-custom">
      <Header />
      <HomeMain />
    </div>
  );
};

export default Home;
