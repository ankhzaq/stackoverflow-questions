/*
  Question: Use Refs In Material UI
  url: https://stackoverflow.com/questions/72069326/use-refs-in-material-ui
*/

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import D34, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Data from "./abc.json";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

export default function Question20() {
  const [loading] = useState(true);
  const imagesRef = [];
  let txt = "IGO";

  useEffect(() => {
    imagesRef.forEach((refImg) => {
      refImg.src = `https://flightaware.com/images/airline_logos/90p/${txt}.png`;
    });
    /*imageRef.current.src = `https://flightaware.com/images/airline_logos/90p/${txt}.png`;
    console.log(imageRef.current.src);*/
  }, [loading]);

  return (
    <div className="hello">
      {Data.response.map((post, posPost) => {
        return (
          <Paper
            sx={{
              pt: 1,
              border: 1,
              boxShadow: 0,
              mt: 1,
              maxWidth: 900,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff"
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" ref={(imageRef) => {
                    if (!imagesRef[posPost]) {
                      imagesRef.push(imageRef);
                    }
                  }} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ px: 2, p: 2 }}
                  >
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
}
