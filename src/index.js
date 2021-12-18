import { StrictMode } from "react";
import ReactDOM from "react-dom";
import AxiosConfigurer from "./config/AxiosConfigurer";
import App from "./App";
AxiosConfigurer.configure();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
