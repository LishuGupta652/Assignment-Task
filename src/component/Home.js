import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Content } = Layout;

const Home = () => {
  const [error, setError] = React.useState("");
  const data = useGlobalState();
  const setData = useGlobalSetState();

  useEffect(() => {
    console.log(data);
  }, [data]);

  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
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
        } else {
          setError("Please fill out all fields");
        }
      })
      .catch(function (err) {
        console.log(err.name, err.erors);
      });
  }, [data]);

  return (
    <HomeContainer>
      <Container>
        <Layout>
          <Header className="header">
            <h1>STEP 01</h1>
          </Header>
          <Content className="content">
            {/* email name phonenumber */}
            <form action="">
              <Input
                placeholder="Enter your email..."
                value={data.email}
                type="email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                required
              />
              <Input
                placeholder="Enter your name..."
                type="text"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                required
              />
              <Input
                placeholder="Enter your phone number..."
                type="tel"
                value={data.phoneNumber}
                onChange={(e) => {
                  setData({ ...data, phoneNumber: e.target.value });
                }}
                required
              />
            </form>
            <div className="error">error: {error}</div>
          </Content>
          <Footer className="buttons">
            <Link to="/audio">
              <button className="right">Next</button>
            </Link>
          </Footer>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Home;
