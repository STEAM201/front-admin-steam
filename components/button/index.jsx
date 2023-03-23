import { BColor } from '@/assets';
import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components';

export const Button = () => {
  const isGray = false
  const [open, setOpen] = useState(false)
  return (
    <>
      <CustomButton onClick={() => { return setOpen(!open) }} isGray={isGray} color='green'>Button</CustomButton>
      <Toast open={open}>
        Hola mundo
        <img src="/thirteen.svg" alt="" />
      </Toast>
    </>
  )
}
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
    from {
    opacity: 0;
    top: -50%;
  }
  to {
    opacity: 1;
    top: 0%;
  }
`
export const fadeOut = keyframes`
     from {
    top: 0%;
  }
  to {
    top: -50%;
  }
`
const CustomButton = styled.button`
  color: ${ (props) => {return props.color ? props.color : 'red' } };
  /* animation: ${rotate360} 1s ease-in-out infinite; */
` 
export const Toast = styled.div`
    animation: ${({ open }) => { return open && (open ? fadeIn : fadeOut) }} 1s forwards;
    height: 89px;
    top: -50%;
    background-color: #50a773;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 30px;
    z-index: 999999999;
    transition: 400ms;
    box-shadow: 0px 0px 6px #00000052;
    color: ${BColor};
    img {
      width: 100px;
      height: 100px;
    }
    &:hover {
      background-color: red;
    }
    &:hover img {
      width: 50px;
      height: 50px;
    }
`