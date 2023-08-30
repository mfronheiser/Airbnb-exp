import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
          rating="5.0"
          reviewCount= {6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
      />
    </div>
  );
}

export default App;
