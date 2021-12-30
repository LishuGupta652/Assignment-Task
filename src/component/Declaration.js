import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input, Checkbox } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const CheckboxHandler = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setData({ ...data, checkbox: e.target.checked });
  };
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
            {/* Check box */}
            <Checkbox onChange={CheckboxHandler}>Checkbox</Checkbox>
          </Content>
          <Footer className="buttons">
            <Link to="/password">
              <button className="left">Previous</button>
            </Link>
            <Link to="/thankyou">
              <button className="right" disabled={!data.checkbox}>
                Next
              </button>
            </Link>
          </Footer>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Home;
