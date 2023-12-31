import { ErrorMessage, Field } from "formik";
import React from "react";
import { styled } from 'styled-components';


const Input = (data: {label: string, name: string, type: string, isError: string, }) => {
    return (
        <InputBoxStyled>
          <InputLabelStyled htmlFor={data.label}>{data.label}</InputLabelStyled>
            <Field 
            name={data.name} 
            type={data.type} 
            id={data.label} 
            error={data.isError} 
            as={InputStyled}/>
            {!data.isError && <ErrorStyled/> }
            <ErrorMessage name={data.name} component={ErrorStyled}/>
            
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
    color: #A2C3A4;
    text-align: center;
  `;
  
  export const InputStyled = styled.input`
    border: 2px solid;
    border-color: #A2C3A4;
    padding: 5px;
    width: 300px;
    height: 35px;
    background: transparent;
    color: #A2C3A4;
    outline: none;
    font-size: 16px;
  `;
  
  export const ErrorStyled = styled.span`
    color: red;
    font-size: 10px;
    height: 15px;
  `;

