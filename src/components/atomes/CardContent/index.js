import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        image="/img/mockup/mockup.png"
        alt="Portfolio-show"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SmudLord
        </Typography>
        <Typography variant="body2" color="text.secondary">
          SmudLord
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">ดูเพิ่มเติม</Button>
      </CardActions>
    </Card>
  );
}
