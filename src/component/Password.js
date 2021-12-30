import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <HomeContainer>
      <Container>
        <Layout>
          <Header className="header">
            <h1>
              Thank you for your time and interest in <span> Techwondoe. </span>
            </h1>
          </Header>
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
              type="number"
              value={data.phoneNumber}
              onChange={(e) => {
                setData({ ...data, phoneNumber: e.target.value });
              }}
              required
            />
          </Content>
          <Footer className="buttons">
            <Link to="/audio">
              <button className="left">Previous</button>
            </Link>
            <Link to="/declaration">
              <button className="right">Next</button>
            </Link>
          </Footer>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Home;
