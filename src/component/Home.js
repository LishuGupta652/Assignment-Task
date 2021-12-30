import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Content } = Layout;

const Home = () => {
  const [showError, setShowEror] = React.useState(false);
  const [error, setError] = React.useState("");
  const data = useGlobalState();
  const setData = useGlobalSetState();

  const navigate = useNavigate();

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

  const openNextPage = (e) => {
    e.preventDefault();
    if (error === "") {
      navigate("/audio");
    } else {
      setShowEror(true);
    }
  };

  return (
    <HomeContainer>
      <Container>
        <Layout>
          <Header className="header">
            <h1>STEP 01</h1>
          </Header>
          <form>
            <Content className="content">
              {/* email name phonenumber */}
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
              {showError && <div className="error"> {error}</div>}
            </Content>
            <Footer className="buttons">
              <button className="right" onClick={openNextPage}>
                Next
              </button>
            </Footer>
          </form>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Home;
