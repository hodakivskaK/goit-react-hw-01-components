import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Section } from "./components/App";
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Section />
  </StrictMode>
);
