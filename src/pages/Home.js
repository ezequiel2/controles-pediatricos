import withRoot from '../withRoot';
// --- Post bootstrap -----
import React, { useState } from 'react';
import ProductCategories from '../views/ProductCategories';
// import ProductSmokingHero from '../views/ProductSmokingHero';
// import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductHowItWorks from '../views/ProductHowItWorks';
// import ProductCTA from '../views/ProductCTA';
import AppAppBar from '../views/AppAppBar';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme';
import { Route, Router, Switch } from 'react-router';
import SignIn from './SignIn';
//import { Router } from '@material-ui/icons';
//import AppAppBar from './modules/views/AppAppBar';

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <React.Fragment>
                <AppAppBar />
                <ProductHero />
                <ProductValues />
                <ProductCategories />
                <ProductHowItWorks />
                {/* <ProductCTA /> */}
                {/* <ProductSmokingHero /> */}
                {/* <AppFooter /> */}
              </React.Fragment>
            </Route>
            <Route exact path="/sign-in">
              <SignIn />

            </Route>

          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default withRoot(Index);