import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import GlobalStyle from "./global/styles";
import theme from "./global/theme";

const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </AuthProvider>
);
