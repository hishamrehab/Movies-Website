import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paginationContainer: {
    paddingLeft: "235px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0",
    },
  },
  button: {
    margin: "30px 2px",
  },
  pageNumber: {
    margin: "0 20px !important",
    color: theme.palette.text.primary,
  },
}));
