import Footer from "./components/Footer.jsx";
import "./styles.css";
import { useState} from "react";
import Home from "./pages/Home.jsx";
import Main from "./pages/Main.jsx";


function App() {

  const [isHome, setIsHome] = useState(true);
  const [userText, setUserText] = useState("");

  const handleSubmit = (formHome, userText) => {
    setIsHome(formHome);
    setUserText(userText);
  }
  
  return (
    <div className="App">
      {isHome ? <Home/> : <Main userText={userText}/>}
      <Footer handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
