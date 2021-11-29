import React, { useEffect } from "react"
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid';


import Header from "src/components/common/Header"
import Footer from "src/components/common/Footer"



const Layout = ({ children, useDefaultHeader = true }) => {

  return (<Grid container spaces={3}>
            <LayoutWrapper>
              <Helmet title="Bank of DeFi | Smart & Dangerous Portfolio Management" />
              {useDefaultHeader && <Header />}

              <MainElement>{children}</MainElement>
              
              <Footer />
            </LayoutWrapper>
          </Grid>)
}

export default Layout



const LayoutWrapper = styled.div`
    width: 100%;
    // max-width: 1440px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100vh;
`

const MainElement = styled.main`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
`