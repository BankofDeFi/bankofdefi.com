import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import  { navigate } from 'gatsby'

import styled from 'styled-components'
import detectEthereumProvider from '@metamask/detect-provider'

import Header from 'src/components/Header'
import BTCBackground from 'src/assets/images/bitcoin.jpg'

import 'src/styles/globals.scss';
import 'src/styles/fonts.scss';


const Home = () => {
  const [ chainId, setChainId ] = useState("")
  const [ userAccount, setUserAccount ] =  useState(null)
  const [ userAccounts, setUserAccounts ] = useState([])
  const [ isDataPending, setIsDataPending ] = useState(false)

  const [ ethProvider, setEthProvider ] = useState(null)

  const connectCTAText = isDataPending ? "Connect" : "Open Bank"


  useEffect(async () => {
    setIsDataPending(true)

    await detectEthereumProvider()
    .then((provider) => {
      setIsDataPending(false)
      setEthProvider(provider)

      if (provider.isConnected()) {
        // window.location = "https://pro.bankofdefi.com"
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
      console.log("You're already connected to Meta Mask")
    }
  }



  return (
    <PageWrapper>
      <Helmet>
        <title>Bank of DeFi</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header 
        handleConnect={handleConnect}
        isDataPending={isDataPending}
        connectCTAText={connectCTAText}
      />

      <MainWrapper>
        <HeroWrapper>
          <HeroSummary>
            <p>Your Gateway to State of the Art DeFi Services and Asset Management.</p>
            <div className="button" onClick={handleConnect}>{connectCTAText}</div>
          </HeroSummary>
          {/* <MainBackgroundImage></MainBackgroundImage> */}
        </HeroWrapper>
      </MainWrapper>

      <FooterElement>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy;{' '}
           Bank of DeFi
        </a>
      </FooterElement>
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
  background: gold;
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
  background: #000 no-repeat fixed right;
  background-image: url(${BTCBackground});
  background-size: 600px;
  background-position: 80% 50%;
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


  .button {
    font-size: 16px;
    width: 140px;
    color: #000;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    background: gold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`



// const MainBackgroundImage = styled.div`
//   width: 100%;
//   height: 500px;
//   background: #000 no-repeat fixed right;
//   background-image: url(${BTCBackground});
//   background-size: 600px;
//   background-position: 80% 50%;
//   border-radius: 100%;
// `

const FooterElement = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

 a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`