import React from "react";

import { Steps, Button, message } from "antd";
import { AntContainer } from "./styles/HomeStyles";

import "antd/dist/antd.css";
import { First, Fourth, Second, Third } from "./component/AntPages";

const { Step } = Steps;

const steps = [
  {
    title: "Basic Information",
    content: <First />,
  },
  {
    title: "Audio",
    content: <Second />,
  },
  {
    title: "Password",
    content: <Third />,
  },
  {
    title: "Declaration",
    content: <Fourth />,
  },
];

const Ant = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <AntContainer>
        <div className="container">
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title}>
                something
              </Step>
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
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
