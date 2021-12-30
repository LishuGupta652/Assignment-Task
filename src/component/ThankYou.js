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
      .get("http://localhost:3000/api/techwondoe/")
      .then((res) => {
        setLoading(false);
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (data.name !== "") {
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
    }

    console.log(data);
  }, [data]);

  return (
    <HomeContainer>
      <Container>
        <div className="thankyou">
          <h1 className="output">
            Thank you for your resonse{" "}
            <span className="user_name">{data.name} </span>
          </h1>
          <div className="buttonContainer">
            <Link to="/">
              <button>Restart</button>
            </Link>
          </div>
          <div className="submittedRes" style={{ padding: 30 }}>
            <h4 style={{ marginTop: 100 }}>
              People who already submitted response.
            </h4>
            <ul>
              {loading ? (
                <div id="loader"></div>
              ) : (
                apiData.map((item) => {
                  return (
                    <li key={item.name + item.email}>
                      <span>{item.name}</span>
                      <span>{item.email}</span>
                      <span>{item.phoneNumber}</span>
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
