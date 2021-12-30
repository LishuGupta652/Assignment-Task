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

  const fetchData = () => {
    // geting data
    fetch("https://gitman-restapi.herokuapp.com/api/techwondoe/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setApiData(res);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(data);
    // sending post data
    if (data.name && data.email && data.phoneNumber && data.password) {
      fetch("https://gitman-restapi.herokuapp.com/api/techwondoe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          fetchData();
        })
        .catch((err) => {
          console.log(err);
          fetchData();
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
