import "./App.css";
import Layout from "./layout/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";

function NoMatch() {
  return (
    <div>
      <br></br> <br></br>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Noto Sans Thai"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
