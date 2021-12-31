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
  .thankyou {
    padding: 10px;

    .buttonContainer {
      width: 100%;
      text-align: center;
    }
    button {
      margin: 0 auto;
    }
  }

  #loader {
    z-index: 1;
    width: 120px;
    height: 120px;
    margin: -76px 0 0 -76px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Add animation to "page content" */
  .animate-bottom {
    position: relative;
    -webkit-animation-name: animatebottom;
    -webkit-animation-duration: 1s;
    animation-name: animatebottom;
    animation-duration: 1s;
  }

  @-webkit-keyframes animatebottom {
    from {
      bottom: -100px;
      opacity: 0;
    }
    to {
      bottom: 0px;
      opacity: 1;
    }
  }

  @keyframes animatebottom {
    from {
      bottom: -100px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  steps-content {
    min-height: 200px;
    margin-top: 16px;
    padding-top: 80px;
    text-align: center;
    background-color: #fafafa;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
  }

  .steps-action {
    margin-top: 24px;
  }
`;

export const AntContainer = styled.div`
  margin-top: 100px;
  .container {
    margin: 0 auto;
    width: auto;
    height: 100%;
    font-size: 1.5em;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 30px;
    @media (min-width: 1024px) {
      max-width: 960px;
    }

    @media (min-width: 1216px) {
      max-width: 1152px;
    }
    @media (min-width: 1408px) {
      max-width: 1244px;
    }
  }
  .error {
    color: red;
    font-size: 16px;
    padding: 20px 0;
  }
  .steps-content {
    min-height: 200px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fafafa;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
  }

  .steps-action {
    margin-top: 24px;
  }

  .note {
    margin: 20px;
  }
`;

export const Container = styled.div`
  .show-cards {
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
  ${(props) =>
    props.fluid &&
    `
    padding: 0;
    margin: 0;
    max-width: 100%;
  `}
`;
