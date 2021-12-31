import React, { useEffect } from "react";
import * as yup from "yup";

// Ant Design components
import { Layout, Input, Checkbox } from "antd";
import { useGlobalSetState, useGlobalState } from "../../context/globalContext";
const { Header, Footer, Content } = Layout;

const Fourth = ({ error, setError }) => {
  const [showError, setShowEror] = React.useState(false);

  const data = useGlobalState();
  const setData = useGlobalSetState();

  const CheckboxHandler = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setData({ ...data, declaration: e.target.checked });
  };

  useEffect(() => {
    if (data.declaration === false) {
      setError("Please check the declaration");
      setShowEror(true);
    } else {
      setError("");
      setShowEror(false);
    }
  }, [data]);

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
