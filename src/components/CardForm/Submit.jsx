import React from 'react'
import { styled } from 'styled-components';

const Submit = ({ title }) => {

  return (
    <ButtonSbumit type='submit'>{title}</ButtonSbumit>
  )
}



export default Submit

export const ButtonSbumit = styled.button`
    margin-top: 20px;
    background-color: #C4F1BE;
    width: 300px;
    border-radius: 5px;
    color: #201E50;
    font-weight: 700;
    font-size: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`
