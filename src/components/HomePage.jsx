import { Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Fetch from "./Fetch";
// import WheatherLogo from "/wheaterLogo.svg";
const HomePage = () => {
  const [weatherData, setWeatherData] = useState("Rome, IT");

  return (
    <>
      {/* <Navbar expand="sm" className="bg-body-tertiary w-100">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="lol"
              src={WheatherLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            METEO.SCHIFO
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h1 className="text-center my-3">
              Scegli uno fra i sei paesi selezionati per te
            </h1>
            <Form.Select
              aria-label="Movie chooser dropdown"
              value={weatherData}
              onChange={(e) => {
                setWeatherData(e.target.value);
              }}
            >
              <option>Rome, IT</option>
              <option>Tokyo, JP</option>
              <option>New York, US</option>
              <option>Madrid, ES</option>
              <option>San Salvador, SV</option>
              <option>Castellaneta, IT</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Fetch weatherData={weatherData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
