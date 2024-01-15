import { useState, useEffect } from "react";
import axios from "axios";

export default function ConvertCurrencies() {
const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios
      .get("https://blockchain.info/ticker")
      .then((response) => {
        const currenciesArray = Object.keys(response.data).map((key) => {
          return { name: key, ...response.data[key] };
        });
        setCurrencies(currenciesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Convert Currencies</h1>
    </div>
  );
}
