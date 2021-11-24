import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Header from 'src/components/common/Header'
import Footer from 'src/components/common/Footer'
import TigerEyes from 'src/assets/images/tiger-eyes.jpg'

import 'src/styles/globals.scss';
import 'src/styles/fonts.scss';

const appURL = 'https://app.bankofdefi.com'
const blogURL = 'https://blog.bankofdefi.com'


const Home = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Bank of DeFi</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header
        blogURL={blogURL}
        appURL={appURL}
      />

      <MainWrapper>
        <HeroWrapper>
          <HeroSummary>
            <p>Your Gateway to State of the Art DeFi Services and Asset Management.</p>
            <div className="button"><a href={appURL}>Open Bank</a></div>
          </HeroSummary>
        </HeroWrapper>
      </MainWrapper>

      <Footer />
    </PageWrapper>
  )
}



export default Home



const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
`


const ButtonWrapper = styled.div`
  font-size: 14px;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background-image: linear-gradient(to right bottom, #e8962e, #e45131)
  box-shadow: 0 1px 28px rgb(255 152 0 / 66%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`


const MainWrapper = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding: 0 50px;
  background: #000;
  position: relative;

  @media(max-width: 600px) {
    padding: 0 25px;
  }

  ::before {
    content: "";
    background-image:  url(${TigerEyes});
    transform: scaleX(-1);
    background-repeat: no-repeat;
    opacity: 0.08;


    background-size: 80%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: -50% 50%;

    @media(max-width: 900px) {
      background-position: 50% 0%;
      background-size: 1000px;
    }

  }


`



const HeroSummary = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 26px;
  max-width: 520px;
  line-height: 1.4;
  justify-content: center;
  font-family: 'Spartan', sans-serif;

  @media(max-width: 600px) {
    font-size: 22px;
  }

  @media(max-width: 500px) {
    font-size: 18px;
  }

  @media(max-width: 400px) {
    font-size: 16px;
  }

  @media(max-width: 320px) {
    font-size: 12px;
  }


  .button {
    font-size: 16px;
    width: 140px;
    color: #fff;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 1px 28px rgb(255 152 0 / 66%);
    background-image: linear-gradient(to right bottom, #e8962e, #e45131) !important;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`