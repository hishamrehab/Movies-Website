import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  actorsContainer: {
    paddingLeft: "220px",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
    },
  },
  image: {
    maxWidth: "90%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0.5em 0.5em 1em",
  },
}));
