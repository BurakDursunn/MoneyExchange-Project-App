import './App.css';
import Contact from './Contact';
import CurrencyList from './CurrencyList';
import Footer from './Footer';
import GoldPrices from './GoldPrices';
import Header from './Header';
import NewsList from './NewsList';


function App() {
  return (
    <div className="App">
     
      <Header />
      <Contact />
      <CurrencyList />
      <GoldPrices/>
      <NewsList />
      <Footer />

    </div>
  );
}

export default App;
