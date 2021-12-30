import React, { useState } from "react";
import { useGlobalState } from "../context/globalContext";
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

const ThankYou = () => {
  const data = useGlobalState();
  const [loading, setLoading] = useState();

  return (
    <HomeContainer>
      <Container>
        <h1 className="output">
          Thank you for your resonse{" "}
          <span className="user_name">{data.name} </span>
        </h1>
      </Container>
    </HomeContainer>
  );
};

export default ThankYou;
