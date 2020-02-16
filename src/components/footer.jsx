import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "fixed",
    bottom: "0",
    right: "45%"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.footer}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Mytube
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
