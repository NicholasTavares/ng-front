import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./global/styles";
import theme from "./global/theme";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
