import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from 'src/assets/images/banklogo.png'



const Header =  ({ appURL, blogURL }) => {  
  return (<HeaderElement>
            <Link to={`/`}>
              <LogoWrapper>
                <ImageWrapper><img src={Logo} alt="logo" /></ImageWrapper>
                <div className="title">Bank of DeFi</div>
              </LogoWrapper>
            </Link>
              

              <HeaderNav>
                  <div><a href="https://blog.bankofdefi.com">Blog</a></div>
                  {/* <div><Link to={`/news`}>News</Link></div> */}
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

  @media(max-width: 600px) {
    background-image: linear-gradient(
      315deg,#a55c1b -20%,#000000 45%);
  }
`

const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  cursor: pointer;

  .title {
    margin: 20px 0px 0px -20px;
    font-size: 30px;
    line-height: 1.15;
    font-family: 'Rokkitt', serif;
    font-weight: 600;
    width: 100%;

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
    max-width: 75px;
  }


  @media(max-width: 600px) {
    margin-top: 0;

    .title {
      margin-left: -20px;
      font-size: 23px;
    }

    img { 
      max-width: 80px;
    }
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
  div {
    margin-left: 25px;
    margin-right: 25px;
  }

  // Temp removal of header nav on mobile, should add hamburger menu to replace. 
  @media(max-width: 500px) {
    display: none; 
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
