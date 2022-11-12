import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const RoundButton = styled(Button)(() => ({
  color: "#fff",
  fontSize: "16px",
  borderRadius: "200px",
  minWidth: "85px",
  maxWidth: "150px",
  textTransform: "none",
  backgroundColor: "#1E2B3B",
  "&:hover": {
    color: "#1E2B3B",
    backgroundColor: "#FEB251",
  },
}));
const DividerFont = styled(Divider)(() => ({
  fontFamily: "Noto Sans Thai",
}));

export { RoundButton, DividerFont };
