import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Logo from 'src/assets/images/banklogo.png'



const Header =  ({ appURL, blogURL }) => {  
  return (<HeaderElement>
              <LogoWrapper>
                <ImageWrapper><img src={Logo} alt="logo" /></ImageWrapper>
                <div className="title">Bank of DeFi</div>
              </LogoWrapper>

              <HeaderNav>
                  <div><a href={blogURL}>Blog</a></div>
                  <ButtonWrapper><a href={appURL}>Open Bank</a></ButtonWrapper>
              </HeaderNav>
          </HeaderElement>)
}



export default Header



const HeaderElement = styled.header`
  width: 100%;
  margin-bottom: 30px;
  max-height: 75px;
  display: flex;
  color: #fff;
  padding: 24px 20px;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(315deg, #a55c1b 0%, #000000 60%);
`

const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  // justify-content: center;
  margin-left: 20px;
  margin-top: 30px;
  width: 100%;

  .title {
    margin: 0;
    font-size: 30px;
    line-height: 1.15;
    font-family: 'Rokkitt', serif;
    font-weight: 600;
    width: 100%;
    margin-left: -30px;
    margin-top: 20px;
    // position: absolute;
    .description {
      text-align: center;
    }
    a {
      color: #0070f3;
      text-decoration: none;
      &:hover, &:focus, &:active {
        text-decoration: underline;
      }
    }
  }
  img {
    width: 100%;
    max-width: 105px;
    margin-right: 5px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const HeaderNav = styled.nav`
  display: flex;
  font-size: 18px;
  align-items: center;
  div:first-child {
    margin-right: 25px;
  }
`


const ButtonWrapper = styled.div`
  font-size: 14px;
  width: 120px;
  color: #fff;
  height: 40px;
  border-radius: 4px;
  background: ${({ isDisabled }) => (isDisabled ? "#cccccc" : "gold")};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  background-image: linear-gradient(to right bottom, #e8962e, #e45131) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`
