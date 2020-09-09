import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTheme } from "./ThemeContext";
import styled, { withTheme } from "styled-components";
import {
  backgroundColor,
  buttonBackgroundColor,
  buttonTextColor,
  textColor,
} from "./theme";

function App(props) {
  // useEffect(() => {
  //   if (!localStorage.getItem("theme")) {

  //   }
  //   localStorage.setItem("theme", props.theme.mode);
  // }, [props]);

  const themeToggle = useTheme();

  const Header = styled.header`
    background: ${backgroundColor};
  `;

  const Text = styled.p`
    color: ${textColor};
  `;

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Test de Dark/Light Mode avec l'API Contexte et les Styled Components
      </p>
      <p>
        <Button onClick={() => themeToggle.toggle()}>
          {props.theme.mode === "dark"
            ? "Passer en Mode Light"
            : "Passer en Mode Dark"}
        </Button>
      </p>
    </header>
  );
}

export default withTheme(App);
