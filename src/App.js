import "./App.css";
import Layout from "./layout/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Noto Sans Thai"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
