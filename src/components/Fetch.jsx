/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
const Fetch = (props) => {
  const [weatherFetch, setWeatherFetch] = useState();

  const getWeatherData = async () => {
    // const URL = 'api.openweathermap.org/data/2.5/forecast?q={City,Country}&appid={API key}units=metric';
    // const APIKey = 'c737eed37d1f0f19dec7d2375390616e'

    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          props.weatherData +
          "&appid=c737eed37d1f0f19dec7d2375390616e&units=metric"
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherFetch(data);
        console.log(weatherFetch);
        // console.log(data);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [props.weatherData]);

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{weatherFetch.Array[0].dt_txt}</Card.Title>
        <Card.Text>
          {weatherFetch.Array[0].temp_min} - {weatherFetch.Array[0].temp_max}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Fetch;
