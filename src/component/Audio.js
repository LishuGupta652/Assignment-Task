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

const Audio = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();

  return (
    <HomeContainer>
      <Container>
        <Layout>
          <Header className="header">
            <h1>STEP 02</h1>
          </Header>
          <Content className="content">
            {/* Audio */}
            {/* start Recording */}
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

export default Audio;
