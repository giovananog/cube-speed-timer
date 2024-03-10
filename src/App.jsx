import { React } from "react";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import Timer from "./components/Timer";
import GutterlessList from "./components/List"
import BasicSpeedDial from "./components/FloatButton";

function App() {
  return (
    <div>  
      <Header />
      <Timer />

      <div className="list-div">
        <GutterlessList />
      </div>
   
      <BasicSpeedDial />
      <Footer />
    </div>
  );
}

export default App;
