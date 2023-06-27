import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux';

import{ AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const CardPostulation = ({index}) => {

  const dataUser = useSelector((state) => state.newData.data);

  const {name, surname, email, id, age, driveLicense, exp, cellphone} = dataUser[index]

  const [active, setActive] = useState("true")

  const handleClick = () =>{
    setActive(!active)
    console.log(active);
  }

  return (
    <PostulationContainer onClick={handleClick} active={active}>
      {
        !active?<>
        <AiFillPlusCircle size={20} color='#C4F1BE'/>
        <h2>{name} {surname} {age}</h2>
        </>
        :<AiFillMinusCircle size={20} color='#C4F1BE'/>
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

    /* height: ${(props) => (props.active ? '20px' : '200px')}; */


    border: 2px solid #A2C3A4;
    width: 90%;
    padding: 5px;
    color:  white;
    display: flex;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    flex-direction: ${(props) => (props.active ? 'column' : 'row')};
    margin: 5px;
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