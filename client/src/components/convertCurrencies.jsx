import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

export default function ConvertCurrencies() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("EUR");

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
      <Card>
        <Card.Header as="h5">Currency Converter</Card.Header>
        <Card.Body>
          <Card.Title>Enter your amount</Card.Title>
          <Form.Control type="number" value={amount} />
          <p>Select your currency</p>
          <p>From</p>
          <Form.Select value={fromCurrency}>
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
            </Form.Select>
          <p>To</p>
          <Form.Select value={toCurrency}>
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </Form.Select>
          <Button variant="primary" className="mt-2">
            Convert
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
