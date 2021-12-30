import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalState } from "../context/globalContext";
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  const data = useGlobalState();
  console.log(data);
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
            <Input placeholder="Enter your email..." value={data.email} />
          </Content>
          <Footer className="buttons">
            <button className="left">Previous</button>
            <button className="right">Next</button>
          </Footer>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Home;
