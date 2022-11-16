import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { DividerFont } from "../../components/atomes/CustomComponents";
import { RoundButton } from "../../components/atomes/CustomComponents";
import Typography from "@mui/material/Typography";

const route = [
  { title: "ผลงาน", icon: "fas fa-award", path: "/" },
  { title: "เกี่ยวกับเรา", icon: "fas fa-user-alt", path: "about" },
];
const useStyles = makeStyles({
  color_header: {
    backgroundColor: "#1E2B3B",
    color: "#fff",
    padding: "10px",
  },
  icon_sidebar: {
    fontSize: "25px",
  },
  logo_web: {
    cursor: "pointer",
  },
  no_padding: {
    padding: "0px !important",
  },
});

function Layout() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [isOpenMenu, setisOpenMenu] = useState(false);

  const handleClick = (path) => {
    navigate(path);
  };
  const toggleDrawer = (value) => {
    setisOpenMenu(value);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      const myWidth = window.innerWidth;
      if (myWidth > 899) {
        setisOpenMenu(false);
      }
    });
  }, []);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        className={classes.logo_web}
        onClick={() => handleClick("/")}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{ width: "100px", height: "100px", margin: "20px" }}
          src="/img/Logo_EYE.jpg"
        />
      </Stack>
      <DividerFont>เมนู</DividerFont>
      {route.map((r, i) => (
        <List key={i} className={classes.no_padding}>
          <ListItem className={classes.no_padding}>
            <ListItemButton onClick={() => handleClick(r.path)}>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Stack
                  width={"25px"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <i className={`${classes.icon_sidebar} ${r.icon}`} />
                </Stack>
                <ListItemText primary={r.title} />
              </Stack>
            </ListItemButton>
          </ListItem>
        </List>
      ))}
      <DividerFont>ช่องทางการติดต่อ</DividerFont>
      <List className={classes.no_padding}>
        <ListItem className={classes.no_padding}>
          <ListItemButton onClick={() => handleClick("contact")}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Stack
                width={"25px"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <i className={`${classes.icon_sidebar} fab fa-line`} />
              </Stack>
              <ListItemText primary={"Plutojaidee"} />
            </Stack>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className={classes.color_header}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={{ xs: "space-between", md: "space-between" }}
          display={{ xs: "none", md: "flex" }}
          spacing={2}
        >
          <Stack direction={"row"} spacing={2}>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography
                variant="h6"
                className={classes.logo_web}
                onClick={() => handleClick("/")}
              >
                PRAMYUDA
              </Typography>
            </Stack>
            <Stack alignItems={"center"} spacing={2} direction={"row"}>
              {route.map((r, i) => (
                <RoundButton key={i} onClick={() => handleClick(r.path)}>
                  {r.title}
                </RoundButton>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <RoundButton onClick={() => handleClick("contact")}>
              ช่องทางการติดต่อ
            </RoundButton>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          display={{ md: "none" }}
          spacing={2}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            className={classes.logo_web}
          >
            PRAMYUDA
          </Stack>
          <Stack>
            <IconButton
              sx={{ color: "#fff" }}
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
          <Drawer
            anchor={"right"}
            open={isOpenMenu}
            onClose={() => toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </Stack>
      </Grid>
    </Box>
  );
}

export default Layout;
