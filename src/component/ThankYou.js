import React, { useEffect, useState } from "react";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const ThankYou = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([data]);

  useEffect(() => {
    setLoading(true);
    console.log(data);
    // Fetch data from https://gitman-restapi.herokuapp.com/api/techwondoe/
    axios
      .get("https://gitman-restapi.herokuapp.com/api/techwondoe/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setApiData(res.data);
      });

    if (data.name !== "") {
      // post data to https://gitman-restapi.herokuapp.com/api/techwondoe
      axios
        .post("https://gitman-restapi.herokuapp.com/api/techwondoe/", {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            name: data.name,
            email: data.email,
            password: data.password,
            declaration: data.declaration,
          },
        })
        .then((res) => {
          console.log(res);
        });
    }
  }, []);

  const resetData = () => {
    setData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      checkPassword: "",
      declaration: "",
    });
  };
  const RestartHandler = () => {
    resetData();
    navigate("/");
  };

  return (
    <HomeContainer>
      <Container>
        <div className="thankyou">
          <h1 className="output">
            Thank you for your resonse{" "}
            <span className="user_name">{data.name} </span>
          </h1>
          <div className="buttonContainer">
            <button onClick={RestartHandler}>Restart</button>
          </div>
          <div className="submittedRes" style={{ padding: 30 }}>
            <h4 style={{ marginTop: 100 }}>
              People who already submitted response.
            </h4>
            <ul>
              {loading ? (
                <div id="loader"></div>
              ) : (
                apiData.map((item, i) => {
                  return (
                    <li key={i}>
                      <span>{item.email}</span>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </Container>
    </HomeContainer>
  );
};

export default ThankYou;
