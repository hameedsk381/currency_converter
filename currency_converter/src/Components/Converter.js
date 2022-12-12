import "../App.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Converter() {
  const [amount, setAmount] = useState("");
  const [convertedvalue, setConvertedvalue] = useState("");
  const [dropdown, setdropdown] = useState([]);
  const [sender_name, setSender_name] = useState("");
  const [purpose, setPurpose] = useState("");

  const [receiver_name, setReceiver_name] = useState("");
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const dropdownlist = async () => {
    // await axios
    //   .post("http://localhost:4001/purpose/dropdown")
    //   .then((response) => {
    //     setdropdown(response.data);
    //   });
    await axios.post("/purpose/dropdown").then((response) => {
      setdropdown(response.data);
    });
  };
  const sendInfo = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:4001/logs/send", {
      //   sent_amount: amount,
      //   rec_amount: convertedvalue * amount,
      //   sender_name: sender_name,
      //   receiver_name: receiver_name,
      //   purpose: purpose,
      // });
      await axios.post("/logs/send", {
        sent_amount: amount,
        rec_amount: convertedvalue * amount,
        sender_name: sender_name,
        receiver_name: receiver_name,
        purpose: purpose,
      });
      alert("Transaction successfull");
    } catch (error) {
      alert("please select the purpose");
    }
    window.location.reload();
    // swl("Submitted succesfully")
  };
  const result = async () => {
    // await axios
    //   .post("http://localhost:4001/currency/usd")
    //   .then((response) => setConvertedvalue(response.data.dollarexchangeRate))
    //   .catch((error) => console.log("error", error));
    await axios
      .post("/currency/usd")
      .then((response) => setConvertedvalue(response.data.dollarexchangeRate))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    result();
    dropdownlist();
  }, []);

  return (
    <div className="App w-25  mx-auto my-2 px-auto ">
      <h1 className="text-center ">Currency converter</h1>

      <Form onSubmit={sendInfo}>
        <Form.Group className="mb-3 " controlId="formGridAddress1">
          <Form.Label>Amount in USD:</Form.Label>
          <Form.Control
            type="number"
            min="0"
            placeholder="Enter amount (USD)"
            value={amount}
            onChange={handleChangeAmount}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formGridAddress1">
          <Form.Label>Amount received in INR:</Form.Label>
          <Form.Control
            placeholder="INR"
            type="number"
            value={amount * convertedvalue}
            onChange={handleChangeAmount}
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formGridAddress1">
          <Form.Label>Sender's Name :</Form.Label>
          <Form.Control
            placeholder="Enter name"
            type="text"
            value={sender_name}
            minLength={4}
            maxLength={16}
            onChange={(e) => {
              setSender_name(e.target.value);
            }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formGridAddress2">
          <Form.Label>Receiver's Name :</Form.Label>
          <Form.Control
            placeholder="Enter name"
            type="text"
            minLength={4}
            maxLength={16}
            value={receiver_name}
            onChange={(e) => {
              setReceiver_name(e.target.value);
            }}
            required
          />
        </Form.Group>

        <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Purpose</Form.Label>
            <Form.Select
              value={purpose}
              onChange={(e) => {
                setPurpose(e.target.value);
              }}
              required
            >
              <option value="N/A">Choose...</option>
              {dropdown.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default Converter;
