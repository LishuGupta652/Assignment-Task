import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input, Checkbox } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Sider, Content } = Layout;

const Declaration = () => {
  const [showError, setShowEror] = React.useState(false);
  const [error, setError] = React.useState("");
  const data = useGlobalState();

  const navigate = useNavigate();

  const setData = useGlobalSetState();
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

  const openNextPage = (e) => {
    e.preventDefault();
    if (data.declaration) {
      setError("");
      navigate("/thankyou");
    } else {
      setError("You must accept the declaration");
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
            {showError && <div className="error">error: {error}</div>}
          </Content>

          <Footer className="buttons">
            <Link to="/password">
              <button className="left">Previous</button>
            </Link>

            <div className="" onClick={openNextPage}>
              <button
                className="right declaration "
                disabled={!data.declaration}
              >
                Next
              </button>
            </div>
          </Footer>
        </Layout>
      </Container>
    </HomeContainer>
  );
};

export default Declaration;
