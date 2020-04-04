import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';


  const Container = styled.div `
    width: 100%;
    height: 100%;
    background-color: #fff;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
     color: #43464B;
    `

const Headerfooter = props => {
  return (
      <div>
        <Header/>
            <Container>
              {props.children}
            </Container>
        <Footer/>
      </div>
  )
}


export default Headerfooter;