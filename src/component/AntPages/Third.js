import React, { useEffect } from "react";
import * as yup from "yup";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../../context/globalContext";
const { Header, Footer, Content } = Layout;

const Third = ({ error, setError }) => {
  const [showError, setShowEror] = React.useState(false);
  const data = useGlobalState();
  const setData = useGlobalSetState();

  let schema = yup.object().shape({
    password: yup.string().required().min(8),
    checkPassword: yup.string().required().min(8),
  });

  useEffect(() => {
    schema
      .isValid({
        password: data.password,
        checkPassword: data.checkPassword,
      })
      .then((valid) => {
        if (valid) {
          setError("");
          setShowEror(false);
          if (data.password !== data.checkPassword) {
            setError("Passwords must match");
            setShowEror(true);
          }
        } else {
          setError("Passwords must be atleast 8 characters");
          setShowEror(true);
        }
      })
      .catch(function (err) {
        console.log(err.name, err);
      });
  }, [data]);

  return (
    <form>
      {/* password checkPassword */}
      <Input
        placeholder="Enter your Password..."
        value={data.password}
        type="password"
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
        required
      />
      <Input
        placeholder="Reenter your Password..."
        type="password"
        value={data.checkPassword}
        onChange={(e) => {
          setData({ ...data, checkPassword: e.target.value });
        }}
        required
      />
    </form>
  );
};

export default Third;
