import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "auto",
    paddingLeft: "200px",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingLeft: "0",
    },
  },
}));
