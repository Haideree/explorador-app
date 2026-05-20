import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import Weather from "./components/Weather";
import AIRecommendation from "./components/AIRecommendation";
import ReactInfo from "./components/ReactInfo";

function App() {
  return (
    <>
      <Navbar />
      <ReactInfo />
      <Countries />
      <Weather />
      <AIRecommendation />
    </>
  );
}

export default App;