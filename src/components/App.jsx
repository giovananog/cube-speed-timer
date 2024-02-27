import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  return (
    <div>  
      <Header />
      <Timer />
      <div className="buttons-div">

        <Button text='start (space)'/>
        <Button text='stop (any button)'/>

      </div>
      <Footer />
    </div>
  );
}

export default App;
