import { useState, useEffect } from "react";
import axios from "axios";
import {Table, Spinner} from "react-bootstrap";
import getSymbolFromCurrency from 'currency-symbol-map'


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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Currency</th>
            <th>15 Minutes</th>
            <th>Last</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency.name}>
              <td>
                {currency.name} {getSymbolFromCurrency(currency.name)}
              </td>
              <td>
                <Spinner animation="grow" variant="danger" size="sm" />{" "}
                {currency["15m"]}
              </td>
              <td>{currency.last}</td>
              <td>{currency.buy}</td>
              <td>{currency.sell}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
