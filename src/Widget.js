import React, {useEffect,useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons'

// const imgStyle = {
//     height: '25rem',
//     width: 'auto',
//     border: 'solid 0.1px',
//     borderRadius: '20px'
//   };

 const ImgStyled = styled.img`
  height: 27rem;
  width: auto;
  border: solid 0.1px;
  border-radius: 20px; 
  box-shadow: 0px 1px 6px -2px black;
 `

 const ContainerStyled = styled.div`
  max-width: 85%;
  display: flex;
  justify-content: space-around;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  box-shadow: 0px 1px 6px -2px black;
  padding: 2%;
  background-color: ${props=>props.theme.secondaryColor};
  div{
    max-width:45%;
    color: ${props=>props.theme.black};
  }
  h2{
    font-size:1.2rem;
  }
  p{
    font-size: 0.8rem;
  }
 `
  const StyledHeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 80%;
    gap: 15px;
    h1{
      font-size: 1.5rem;
      color: ${props=>props.theme.white};
    }
  `
  

function Widget(props){
   return (
    <>
    <StyledHeadingContainer>
    <FontAwesomeIcon icon={faShuttleSpace} size="lg" style={{color: "#ffffff",}} />
    <h1>NASA PHOTO OF THE DAY</h1>
    <FontAwesomeIcon icon={faShuttleSpace} size="lg" style={{color: "#ffffff",}} />
    </StyledHeadingContainer>
    <ContainerStyled>
      <ImgStyled src={props.data.url} alt=""/>
      <div>
        <h2>{props.data.title.toUpperCase()}</h2>
        <p>{props.data.explanation}</p>
      </div>
    </ContainerStyled>
    </>
   ) 
}

export default Widget;