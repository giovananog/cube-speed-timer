import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DisableElevation from "./Button";
import Timer from "./Timer";
import GutterlessList from "./List"
import BasicSpeedDial from "./FloatButton";

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
