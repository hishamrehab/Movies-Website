import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviesContainer: {
    paddingLeft: "220px",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
  },
}));
