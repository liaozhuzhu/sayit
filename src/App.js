import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import "./styles.css";
import Main from "./pages/Main.jsx";
import { useState} from "react";

function App() {
  
  return (
    <div className="App">
      <Home/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
