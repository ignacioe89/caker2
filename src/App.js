import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Popular from './components/Popular';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
