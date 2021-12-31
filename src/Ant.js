import React, { useState } from "react";

import { Steps, Button, message } from "antd";
import { AntContainer } from "./styles/HomeStyles";

import "antd/dist/antd.css";
import { First, Fourth, Second, Third } from "./component/AntPages";
import { useGlobalSetState, useGlobalState } from "./context/globalContext";

const { Step } = Steps;

const Ant = () => {
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState("");

  const data = useGlobalState();
  const setData = useGlobalSetState();

  const steps = [
    {
      title: "Basic Information",
      content: <First error={error} setError={setError} />,
    },
    {
      title: "Audio",
      content: <Second error={error} setError={setError} />,
    },
    {
      title: "Password",
      content: <Third error={error} setError={setError} />,
    },
    {
      title: "Declaration",
      content: <Fourth error={error} setError={setError} />,
    },
  ];

  const next = () => {
    if (error) {
      message.error(error);
      return;
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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

  const handleSubmit = () => {
    if (error) {
      message.error(error);
      return;
    }
    setLoading(true);
    if (data.name && data.email && data.phoneNumber && data.password) {
      console.log("Sending data " + data);
      fetch("https://gitman-restapi.herokuapp.com/api/techwondoe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          message.success("Processing complete!");
          console.log(res);
          setLoading(false);
          fetchData();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          fetchData();
        });
    } else {
      setLoading(false);
      message.error("Please fill all the fields");
    }
    console.log(data);
  };

  return (
    <>
      <AntContainer>
        <div className="container">
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button
                type={error ? "dashed" : "primary"}
                onClick={() => next()}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type={error ? "dashed" : "primary"}
                onClick={() => handleSubmit()}
                loading={loading}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </AntContainer>
    </>
  );
};
export default Ant;
