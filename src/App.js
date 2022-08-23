import React from "react";
import styled from "styled-components";
import DateBox from "./components/DateBox/DateBox";

const CurrentInfo = styled.div`
  width: 230px;
  background: red;
`;

const App = () => {
  return (
    <div>
      <CurrentInfo>
        <DateBox />
      </CurrentInfo>
    </div>
  );
};

export default App;
