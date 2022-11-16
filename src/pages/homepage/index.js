import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import MediaCard from "../../components/atomes/CardContent";

const useStyles = makeStyles({
  box_content: {
    margin: "10px",
  },
});
const indexData = [1, 2, 3, 4, 5, 6];

function HomePage() {
  const classes = useStyles();
  return (
    <Paper elevation={4} className={classes.box_content}>
      <Grid container spacing={2}>
        {indexData.map((x, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MediaCard />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default HomePage;
