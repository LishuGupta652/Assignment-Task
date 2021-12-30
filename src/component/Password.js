import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Sider, Content } = Layout;

const Password = () => {
  const data = useGlobalState();
  const setData = useGlobalSetState();

  let schema = yup.object().shape({
    phone: yup
      .string()
      // regexr.com/6anqd
      .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
        message: "Invalid Indian number",
        excludeEmptyString: false,
      })
      .required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords do not match"),
    agree: yup
      .boolean()
      .oneOf(
        [true],
        "It is essential to accept our Privacy Policy to register."
      ),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <HomeContainer>
      <Container>
        <Layout>
          <Header className="header">
            <h1>STEP 03</h1>
          </Header>
          <Content className="content">
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

export default Password;
