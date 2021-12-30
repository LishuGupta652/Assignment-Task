import React from "react";
import { useGlobalState } from "../context/globalContext";
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

const ThankYou = () => {
  const data = useGlobalState();
  return (
    <HomeContainer>
      <Container>
        <h1>
          Thank you <span className="user_name">{data.name} </span>
        </h1>
      </Container>
    </HomeContainer>
  );
};

export default ThankYou;
