import React from 'react'
import styled from "styled-components";
import Button from "./Button";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 30px;
  color: #fff;
  background-color: #43464B;
  text-align: center;
  color: #fff;
  
`



const Footer = (props) => {
  return (
      <FooterContainer>
        Le footer
      </FooterContainer>
  )
}


export default Footer