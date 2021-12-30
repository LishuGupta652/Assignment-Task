import React, { useEffect, useState } from "react";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";
import axios from "axios";
const ThankYou = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post("http://localhost:3000/api/techwondoe", data)
      .then((response) => {
        setLoading(false);
        console.log(response);
        setData({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          checkPassword: "",
          declaration: "",
        });
      });

    console.log(data);
  });
  return (
    <HomeContainer>
      <Container>
        <h1 className="output">
          Thank you for your resonse{" "}
          <span className="user_name">{data.name} </span>
        </h1>
        <Link to="/">
          <button>Restart</button>
        </Link>
      </Container>
    </HomeContainer>
  );
};

export default ThankYou;
