
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Tech from "./Components/Tech";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Hero />
      <Tech />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
