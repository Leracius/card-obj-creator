import React from 'react'
import { styled } from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';

const Submit = ({ onSubmit, title }) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    onSubmit()
  }

  return (
    <ButtonSbumit onClick={(e)=>handleSubmit(e)} type='submit'>{title}<FaPaperPlane size={15} color='#201E50'/></ButtonSbumit>
  )
}



export default Submit

const ButtonSbumit = styled.button`
    margin-top: 30px;
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