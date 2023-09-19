import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount= {item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}

export default App;
