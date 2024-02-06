import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import './css/Header.css'
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
        <Footer />
        <Analytics />
        </div>
    </div>
  );
}

export default App;
