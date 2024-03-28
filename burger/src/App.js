import NavBar from "./compotnets/NavBar";
import VideoDiv from "./compotnets/VideoDiv";
import BurgerCarousel from "./compotnets/BurgerCarousel";
import AboutDiv from "./compotnets/AboutDiv";

function App() {
  return (
    <>
      <NavBar />
      <div className="Wrapper">
        <VideoDiv />
        <BurgerCarousel />
        <AboutDiv />
      </div>
    </>
  );
}
export default App;
