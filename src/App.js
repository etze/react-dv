import React from "react";
import FirstExample from "./firstExample";
import SecondExample from "./SecondExample";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "600px",
    padding: theme.spacing(3)
    // padding: "30px"
    // margin: "0px"
  },
  mainPaper: {
    width: "100%",
    height: "100%"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Paper className={classes.mainPaper}>
        <Grid
          container
          // spacing={1}
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Paper>
            <Typography align="center">First Example</Typography>
            <FirstExample />
          </Paper>
        </Grid>
      </Paper>
      <Paper className={classes.mainPaper}>
        <Grid
          container
          // spacing={1}
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Paper>
            <Typography align="center">Second Example</Typography>
            <SecondExample />
          </Paper>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default App;
