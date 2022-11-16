import "./App.css";
import Layout from "./layout/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";

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
const useStyles = makeStyles({
  display_content: {
    margin: "8px",
    height: "90vh",
    overflowY: "auto",
  },
});
function App() {
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      fontFamily: ["Noto Sans Thai"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <Stack className={classes.display_content}>
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
