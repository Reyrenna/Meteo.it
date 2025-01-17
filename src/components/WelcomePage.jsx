import Button from "react-bootstrap/Button";
import WheatherLogo from "/wheaterLogo.svg";
const WelcomePage = () => {
  return (
    <>
      <h2 className="welcome">Welcome in</h2>
      <div className="d-flex">
        <h1 className="schifo">METEO.</h1>
        <h1 className="schifo2 ">SCHIFO</h1>
      </div>

      <img
        src={WheatherLogo}
        alt="boh mi sto incazzando"
        className="logo2"
      ></img>
      <Button variant="primary fs-5 fw-bold">GET STRTED</Button>
    </>
  );
};

export default WelcomePage;
