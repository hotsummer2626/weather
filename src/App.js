import React, { useState, useEffect } from "react";
import "./App.scss";
import styled from "styled-components";
import bgImg from "./assets/bg.jpg";
import DateBox from "./components/DateBox/DateBox";
import CurrentWeatherConditions from "./components/CurrentWeatherConditions/CurrentWeatherConditions";
import Location from "./components/Location/Location";
import ForcastWeatherList from "./components/ForcastWeatherList/ForcastWeatherList";
import { getCurrentWeather, getForecastWeather } from "./api/apis";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const CurrentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 240px;
  position: absolute;
  top: 20px;
  left: 50px;
  @media (max-width: 576px) {
    width: 270px;
    top: 10px;
    left: 10px;
  }
`;

const App = () => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [forcastWeather, setForcastWeather] = useState("");

  useEffect(() => {
    async function fetchData() {
      let data = await getCurrentWeather("sydney");
      setCurrentWeather(data);
      const { coord } = data;
      let forcastDate = await getForecastWeather(coord.lat, coord.lon);
      setForcastWeather(forcastDate);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <CurrentInfo>
        <DateBox />
        <CurrentWeatherConditions conditions={currentWeather} />
      </CurrentInfo>
      <Location currentLocation={currentWeather} />
      <ForcastWeatherList
        currentWeather={currentWeather}
        forcastWeather={forcastWeather}
      />
    </Container>
  );
};

export default App;
