import Header from "./components/Header";
import ServiceDates from "./components/ServiceDates";
import MilitaryService from "./components/MilitaryService";
import AgeLeave from "./components/AgeLeave";
import Submit from "./components/Submit";
import TotalService from "./components/TotalService";

function App() {
  return (
    <div>
      <Header />
      <ServiceDates />
      <AgeLeave />
      <MilitaryService />
      <TotalService />
      <Submit />
    </div>
  );
}

export default App;
