import React, { useState } from "react";
import reset from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const GlobalStyle = createGlobalStyle`
  ${reset}
  button {
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer;
  }

  a {
    text-decoration: none;
  }
`;

const Wrapper = styled.div``;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper id="wrapper">
        <Header></Header>
        <Main></Main>
      </Wrapper>
    </>
  );
}

export default App;
