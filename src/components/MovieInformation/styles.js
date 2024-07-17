import { Height } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",
    paddingLeft: "220px",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
      paddingLeft: "0",
    },
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em black rgb(64 , 64 , 70)",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "50%",
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
    },
  },
  genresContainer: {
    margin: "10px 0 !important",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  genreImage: {
    filter: theme.palette.mode == "dark" && "invert(1)",
    marginRight: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
  },
  castImage: {
    with: "100%",
    maxWidth: "7em",
    height: "8em",
    objectFit: "cover",
    borderRadius: "10px",
  },
  buttonsContainer: {
    display: "flex",

    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
}));
