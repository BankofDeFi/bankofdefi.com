import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Logo from 'src/assets/images/bank-of-defi-logo.jpeg'

import detectEthereumProvider from '@metamask/detect-provider'


const blogURL = 'https://blog.bankofdefi.com'


const Header = () => {
  const [ chainId, setChainId ] = useState("")
  const [ userAccount, setUserAccount ] =  useState(null)
  const [ userAccounts, setUserAccounts ] = useState([])
  const [ isDataPending, setIsDataPending ] = useState(false)

  const [ ethProvider, setEthProvider ] = useState(null)

  useEffect(async () => {
    // Check if ethProvider exist, disable connect buttons if so, and redirect to app
    await detectEthereumProvider()
    .then((provider) => {
      setEthProvider(provider)
      if (provider.isConnected()) {
        setIsDataPending(true)
      }
    })
  }, [])

  
  const handleConnect = async (event)  => {
    event.preventDefault()

    if (!ethProvider.isConnected) {
      console.log("Ethereum detected")

      await ethProvider.request({ method: "eth_chainId" })
      .then(payload => {
        setChainId(payload)
      })
      .catch(error => {
        console.log(error, 'Issues with ChainID')
      })

      await ethProvider.request({ method: "eth_requestAccounts" })
      .then(payload => {
        setUserAccounts(payload)
      })
      .then(() => {
        setUserAccount(userAccounts[0])
      })
      .catch(error => {
        console.log(error.code, 'codeError')
        if (error.code === -32002) {
          console.log( 'its a pending error')
        }
      })

      console.log(chainId, 'chainId')
      console.log(userAccount, "userAccount")
      console.log(userAccounts, "userAccounts")
    } else {
      console.log(" Please install MetaMask!")
    }
  }

  return (<HeaderElement>
              <LogoWrapper>
              <ImageWrapper><img src={Logo} alt="logo" /></ImageWrapper>
              <div className="title">Bank of DeFi</div>
              </LogoWrapper>

              <HeaderNav>
                  <div><a href={blogURL}>Blog</a></div>
                  <ButtonWrapper 
                    onClick={handleConnect}
                    isDisabled={isDataPending}
                  >
                    {"Connect"}
                  </ButtonWrapper>
              </HeaderNav>
          </HeaderElement>)
}



export default Header



const HeaderElement = styled.header`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid silver;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    margin: 0;
    font-size: 26px;
    line-height: 1.15;
    font-family: 'Rokkitt', serif;
    font-weight: 600;
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
    max-width: 20px;
    margin-right: 5px;
    border-radius: 100%;
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
  height: 40px;
  border-radius: 4px;
  background: ${({ isDisabled }) => (isDisabled ? "#cccccc" : "gold")};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`
