import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

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
      <Card>
        <Card.Header as="h5">Currency Converter</Card.Header>
        <Card.Body>
          <Card.Title>Enter your amount</Card.Title>
          <Form.Control type="number" />
          <p>Select your currency</p>
          <p>From</p>
          <Form.Select>
          </Form.Select>
          <p>To</p>
          <Form.Select >
          </Form.Select>
          <Button variant="primary" className="mt-2">
            Convert
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
