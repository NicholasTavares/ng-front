import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import GlobalStyle from "./global/styles";
import theme from "./global/theme";

const queryClient = new QueryClient();

if (import.meta.env.VITE_APP_MODE === "production") {
  disableReactDevTools();
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </AuthProvider>
);
