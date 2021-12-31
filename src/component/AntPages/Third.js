import React, { useEffect } from "react";
import * as yup from "yup";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../../context/globalContext";
const { Header, Footer, Content } = Layout;

const Third = () => {
  const [showError, setShowEror] = React.useState(false);
  const [error, setError] = React.useState("");
  const data = useGlobalState();
  const setData = useGlobalSetState();

  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
  });

  useEffect(() => {
    schema
      .isValid({
        name: data.name,
        email: data.email,
        phone: data.phoneNumber,
      })
      .then((valid) => {
        if (valid) {
          setError("");
          setShowEror(false);
        } else {
          setError("Please fill out all fields Correctly");
        }
      })
      .catch(function (err) {
        console.log(err.name, err.erors);
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
      {showError && <div className="error"> {error}</div>}
    </form>
  );
};

export default Third;
