import React from 'react';
import styled from "styled-components";
import logo from './th (19).jpg';
import Button from "./Button";

const HeaderStyle = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #43464B;
  text-align: center;
  color: #fff;
  
`


const Header = (props) => {
  return (
    <HeaderStyle>
    
     <p> loup garou </p>
  
    </HeaderStyle>
    );
}



export default Header;
