import Footer from "./components/Footer.jsx";
import "./styles.css";
import { useState} from "react";
import Home from "./pages/Home.jsx";
import Main from "./pages/Main.jsx";


function App() {

  const [isHome, setIsHome] = useState(true);

  const handleSubmit = (formHome) => {
    setIsHome(formHome);
  }
  
  return (
    <div className="App">
      {isHome ? <Home/> : <Main/>}
      <Footer handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
