import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  ProfilePage: {
    paddingLeft: "220px",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
    },
  },
}));
