import './App.css';
import FrequentlyAsk from './components/FrequentlyAsk/FrequentlyAsk';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
          <Header></Header>
          <Shop></Shop>
          <FrequentlyAsk></FrequentlyAsk>
    </div>
  );
}

export default App;
