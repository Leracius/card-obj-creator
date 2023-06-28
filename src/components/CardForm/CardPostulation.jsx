import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux';

import{ AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const CardPostulation = ({index}) => {

  const dataUser = useSelector((state) => state.newData.data);

  const {name, surname, email, id, age, driveLicense, exp, cellphone} = dataUser[index]

  const [active, setActive] = useState('')

  const handleClick = () =>{
    setActive(!active)
    console.log(active);
  }

  return (
    <PostulationContainer onClick={handleClick} active={active}>
      {
        active?
        <AiFillMinusCircle size={20} color='#C4F1BE'/>
        :
        <>
        <AiFillPlusCircle size={20} color='#C4F1BE'/>
        <h2>{name} {surname} {age}</h2>
        </>
      }
      
      {
        active && <ul>
        <li>Nombre: {name}</li>
        <li>Apellido: {surname}</li>
        <li>Correo electronico: {email}</li>
        <li>Edad: {age}</li>
        <li>Numero de celular: {cellphone}</li>
        <li>Licencia: {driveLicense?'tiene licencia':'no tiene licencia'}</li>
        <li>Años de experiencia: {exp?`${exp}`:'0'}</li>
      </ul>
      }
    </PostulationContainer>
  )
}

export default CardPostulation

const PostulationContainer = styled.div`
    border: 2px solid #A2C3A4;
    margin-bottom: 5px;
    width: 95%;
    padding: 5px;
    display: flex;
    flex-direction: ${(props) => (props.active ? 'column' : 'row')};
    h2{
      font-size: 14px;
      margin: 0 0 0 10px;
      color:  #A2C3A4;
    }
    ul{
    list-style: none;
    padding: 0;
    margin: 0;
    }
    li {
    color: #A2C3A4;
    margin-bottom: 3px;
    font-size: 12px;
    }
`