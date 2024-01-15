import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

export default function ConvertCurrencies() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedValue, setConvertedValue] = useState("");

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
  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
    if (newAmount === '' || newAmount === '0') {
      setConvertedValue('0');
    }
  };
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };
  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const convertCurrency = () => {
    const fromRate = currencies.find((cur) => cur.name === fromCurrency)?.last;
    const toRate = currencies.find((cur) => cur.name === toCurrency)?.last;
    if (fromRate && toRate) {
      const result = (amount / fromRate) * toRate;
      setConvertedValue(result.toFixed(2));
    }
  };
  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency, currencies]);
  return (
    <div>
      <Card>
        <Card.Header as="h5">Currency Converter</Card.Header>
        <Card.Body>
          <Card.Title>Enter your amount</Card.Title>
          <Form.Control type="number" value={amount} onChange={handleAmountChange} />
          <p>Select your currency</p>
          <p>From</p>
          <Form.Select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
            </Form.Select>
          <p>To</p>
          <Form.Select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </Form.Select>
          <Button variant="primary" className="mt-2" onClick={convertCurrency}>
            Convert
          </Button>
          {convertedValue && (
            <Card.Text className="mt-2">
              {amount} {fromCurrency} is equal to {convertedValue} {toCurrency}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
