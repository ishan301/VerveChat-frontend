import './App.scss';
import Footer from './components/Footer/Footer';

import AppVideo from './components/AppVideo/AppVideo';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <AppVideo/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
