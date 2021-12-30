import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px 0;
  position: relative;
  .error {
    text-align: center;
    color: red;
    font-size: 16px;
    padding: 10px 0;
  }
  h1 {
    text-align: center;
    padding: 30px 0;
  }

  .header {
    border-radius: 10px;
    background-color: #f5f5f5;
    margin-bottom: 50px;
  }
  span {
    /* MAGIC */
    background-image: linear-gradient(
      transparent 64px,
      #f243b3 50%,
      #ffca47 100%
    );
  }
  .content {
    width: 100%;
    margin: 0 auto;
    form {
    }
    width: 500px;
    text-align: center;
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="password"],
    input[type="tel"],
    select {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      width: 100%;
      background-color: #4caf50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #45a049;
    }
  }

  button {
    background-color: #424242;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .buttons {
    padding: 30px 20px;
    margin: 50px;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
    .declaration {
      background-color: ${(props) =>
        props.declaration ? "#323232" : "#828282"};
    }
  }
  .user_name {
  }
`;
