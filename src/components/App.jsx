import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DisableElevation from "./Button";
import Timer from "./Timer";
import GutterlessList from "./List"

function App() {
  return (
    <div>  
      <Header />
      <Timer />
      <div className="buttons-div">

        <DisableElevation text='start (space)'/>
        <DisableElevation text='stop (any key)'/>

      </div>

      <div className="list-div">
        <GutterlessList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
