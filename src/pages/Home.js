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

import useUser from '../contexts/hooks/useUser'


const Home = () => {

  const { user, changeUser } = useUser(null);
  console.log(user);

  return ( 
  
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
  );
}

export default withRoot(Home);