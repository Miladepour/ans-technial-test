import { Route, Routes } from "react-router-dom";
import './App.css';
import ConvertCurrencies from "./components/convertCurrencies"
import CurrenciesDisplay from "./components/currenciesDisplay"
import Navbar from "./components/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CurrenciesDisplay />} />
        <Route path="/convert" element={<ConvertCurrencies />} />
      </Routes>
    </div>
  );
}

export default App;
