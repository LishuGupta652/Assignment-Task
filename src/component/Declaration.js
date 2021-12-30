import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input, Checkbox } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Sider, Content } = Layout;

const Declaration = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();
  const [error, setError] = useState("teset");
  useEffect(() => {
    console.log(data);
  }, [data]);

  const CheckboxHandler = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setData({ ...data, declaration: e.target.checked });
  };

  const checkError = () => {
    if (!data.declaration) {
      setError("You must accept the declaration");
    } else {
      setError("");
    }
  };
  return (
    <HomeContainer declaration={data.declaration}>
      <Container>
        <Layout>
          <Header className="header">
            <h1>STEP 04</h1>
          </Header>
          <Content className="content">
            {/* Check box */}
            <Checkbox onChange={CheckboxHandler}>
              I agree to the terms and conditions
            </Checkbox>
          </Content>
          <Footer className="buttons">
            <div className="error">{error}</div>
            <Link to="/password">
              <button className="left">Previous</button>
            </Link>
            <Link to="/thankyou">
              <div className="" onClick={checkError}>
                <button
                  className="right declaration "
                  disabled={!data.declaration}
                >
                  Next
                </button>
              </div>
            </Link>
          </Footer>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Declaration;
