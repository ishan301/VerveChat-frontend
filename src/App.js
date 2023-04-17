import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppVideo from "./components/AppVideo/AppVideo";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <AppVideo />
      </Router>
      <About />
      <Footer />
    </div>
  );
}

export default App;
