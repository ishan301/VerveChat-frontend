import "./App.scss";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "./AppVideo.scss";

function App() {
  return (
    <div className="App">
      <div className="app-video">
        <Header />
        <div className="app-video-box">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
