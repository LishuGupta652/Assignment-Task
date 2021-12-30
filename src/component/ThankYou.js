import React, { useEffect, useState } from "react";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";
import axios from "axios";
import { Link } from "react-router-dom";
const ThankYou = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();

  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/techwondow/")
      .then((res) => {
        setLoading(false);
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post("http://localhost:3000/api/techwondoe/", data)
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
      })
      .catch((err) => {
        console.log(err);
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
