import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
import { AudioOutlined } from "@ant-design/icons/lib/icons";
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
            {/* Audio */}
            <AudioOutlined />
          </Content>
          <Footer className="buttons">
            <Link to="/">
              <button className="left">Previous</button>
            </Link>
            <Link to="/password">
              <button className="right">Next</button>
            </Link>
          </Footer>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Home;
