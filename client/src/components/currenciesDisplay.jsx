import { useState, useEffect } from "react";
import axios from "axios";


export default function CurrenciesDisplay() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get("https://blockchain.info/ticker")
      .then((response) => {
        const currenciesArray = Object.keys(response.data).map((key) => {
          return { name: key, ...response.data[key] };
        });
        setCurrencies(currenciesArray);
        console.log(currenciesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>

    </div>
  );
}
