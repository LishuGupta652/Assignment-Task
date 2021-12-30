import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px 0;
  h1 {
    text-align: center;
  }
  .header {
    span {
      /* MAGIC */
      background-image: linear-gradient(
        transparent 64px,
        #f243b3 50%,
        #ffca47 100%
      );
    }
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
    width: 500px;
    display: flex;
    justify-content: centerw;
    align-items: center;
  }
`;
