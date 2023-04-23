import "./App.scss";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AppVideo from "./components/AppVideo/AppVideo";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Home/>}/>
      </Routes>
      {/* <AppVideo />
      <About />
      <Footer /> */}
    </div>
  );
}

export default App;
