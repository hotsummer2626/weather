import React from "react";
import "./App.scss";
import styled from "styled-components";
import bgImg from "./assets/bg.jpg";
import DateBox from "./components/DateBox/DateBox";
import CurrentWeatherConditions from "./components/CurrentWeatherConditions/CurrentWeatherConditions";
import Location from "./components/Location/Location";
import ForcastWeatherList from "./components/ForcastWeatherList/ForcastWeatherList";

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
  width: 230px;
  position: absolute;
  top: 20px;
  left: 50px;
`;

const App = () => {
  return (
    <Container>
      <CurrentInfo>
        <DateBox />
        <CurrentWeatherConditions />
      </CurrentInfo>
      <Location />
      <ForcastWeatherList />
    </Container>
  );
};

export default App;
