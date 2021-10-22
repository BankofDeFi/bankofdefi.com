import React from 'react'
import styled from 'styled-components'



const Footer = () => {
    return (
        <FooterElement>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            &copy;{' '}
            Bank of DeFi
            </a>
        </FooterElement>)
}


export default Footer




const FooterElement = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: linear-gradient(
    315deg,#000000 0%, #a55c1b 70%);

  img {
    margin-left: 0.5rem;
  }

 a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rokkitt, sans-serif;
    font-size: 16px;
  }
`