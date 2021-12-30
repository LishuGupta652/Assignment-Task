import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

// StyledComponent
import { Container } from "../styles/GlobalStyles";
import { HomeContainer } from "../styles/HomeStyles";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../context/globalContext";
const { Header, Footer, Sider, Content } = Layout;

const Password = () => {
  const [showError, setShowEror] = React.useState(false);
  const [error, setError] = React.useState("");
  const data = useGlobalState();
  const setData = useGlobalSetState();

  const navigate = useNavigate();

  let schema = yup.object().shape({
    password: yup.string().required().min(8),
    checkPassword: yup
      .string()
      .required()
      .min(8)
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  useEffect(() => {
    schema
      .isValid({
        password: data.password,
        checkPassword: data.checkPassword,
      })
      .then((valid) => {
        console.log(valid);
        if (data.password !== data.checkPassword) {
          setError("Passwords must match");
          setShowEror(true);
        }

        if (valid) {
          setError("");
          setShowEror(false);
        } else {
          setError("Password Should be similar and atleast 8 characters");
        }
      })
      .catch(function (err) {
        console.log(err.name, err);
      });
  }, [data]);

  const openNextPage = (e) => {
    e.preventDefault();
    if (error === "") {
      navigate("/declaration");
    } else {
      setShowEror(true);
    }
  };

  return (
    <HomeContainer>
      <Container>
        <form>
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
              {showError && <div className="error"> {error}</div>}
            </Content>
            <Footer className="buttons">
              <Link to="/audio">
                <button className="left">Previous</button>
              </Link>
              <button className="right" onClick={openNextPage}>
                Next
              </button>
            </Footer>
          </Layout>
        </form>
      </Container>
    </HomeContainer>
  );
};

export default Password;
