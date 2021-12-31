import React, { useEffect } from "react";
import * as yup from "yup";

// Ant Design components
import { Layout, Input, Checkbox } from "antd";
import { useGlobalSetState, useGlobalState } from "../../context/globalContext";
const { Header, Footer, Content } = Layout;

const Fourth = () => {
  const [showError, setShowEror] = React.useState(false);
  const [error, setError] = React.useState("");

  const data = useGlobalState();
  const setData = useGlobalSetState();

  const CheckboxHandler = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setData({ ...data, declaration: e.target.checked });
  };

  return (
    <Layout>
      <form>
        <Checkbox onChange={CheckboxHandler}>
          I agree to the terms and conditions
        </Checkbox>
      </form>
    </Layout>
  );
};

export default Fourth;
