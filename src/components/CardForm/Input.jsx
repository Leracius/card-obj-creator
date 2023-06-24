import React from "react";
import { styled } from 'styled-components';


const Input = ({ label, type, name, handleChange, value }) => {
    return (
        <InputBoxStyled>
          <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
            <InputStyled onChange={handleChange} value={value} name={name} type={type} id={label} ></InputStyled>
            {
                false && <ErrorStyled>Error</ErrorStyled>
            }
        </InputBoxStyled>
      );
    };
    
    export default Input;

    export const InputBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
  `;
  
  export const InputLabelStyled = styled.label`
    font-size: 12px;
    display: flex;
    margin-top: 10px;
    color: #C4F1BE;
  `;
  
  export const InputStyled = styled.input`
    border: 2px solid;
    border-color: ${({ error }) => (error ? "red" : "#A2C3A4")};
    padding: 5px;
    width: 300px;
    height: 35px;
    background: transparent;
    color: #A2C3A4;
    outline: none;
    font-size: 16px;
  `;
  
  export const ErrorStyled = styled.span`
    padding-left: 5px;
    color: var(--error);
  `;
