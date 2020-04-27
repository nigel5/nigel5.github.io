import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import C1 from '../components/logos/c1'
import C2 from '../components/logos/c2'

import Highlighted from '../components/highlighted';

import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const IndexPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{
        marginTop: matches ? '15vh' : 0
      }}></div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item></Grid>
        <Grid container item direction="column" spacing="5">
          <Grid item>
            <Typography component="h1" variant="h5">
              Nigel Huang
            </Typography>
            <Typography variant="caption">
              B.Eng Computer Engineering, 2022
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h2" variant="overline">
              Links
            </Typography>
            <Grid container justify="center" alignItems="center">
              <Highlighted href="https://github.com/nigel5">
                GitHub
              </Highlighted>
              <Highlighted href="https://drive.google.com/open?id=1Id59vZgLEyLLlwFfNe-dvou9XraZ20Xp">
                Resume
              </Highlighted>
              <Highlighted href="http://linkedin.com/in/nigel-huang/">
                LinkedIn
              </Highlighted>
            </Grid>
          </Grid>
          <Grid item>
            <Typography component="h2" variant="overline">
              Experience
            </Typography>
            <Grid container direction="row" justify="center" spacing={5}>
              <Grid item>
                <C1 />
              </Grid>
              <Grid item>
                <C2 />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography component="h2" variant="overline">
              Projects
            </Typography>
          </Grid> */}
        </Grid>

        <Grid item></Grid>
      </Grid>

      {/* <h1>Nigel Huang</h1>
      <div>
          <small><p>EXPERIENCE</p></small>
          <p>Quality Engineer&nbsp;<Highlighted href="https://www.rbcroyalbank.com/personal.html">@RBC</Highlighted></p>
          <p>Developer&nbsp;<Highlighted href="https://www.transcore.ca/">@TransCore Link Logistics</Highlighted></p>
      </div>
      <div>
          <small><p>PROJECTS</p></small>
      </div> */}
    </Layout>
  )
}

export default IndexPage
