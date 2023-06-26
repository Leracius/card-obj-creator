import React from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux';

const CardPostulation = ({index}) => {

  const dataUser = useSelector((state) => state.newData.data);

  const dataSelected = dataUser[index]

  return (
    <PostulationContainer>
      <p>name: {dataSelected.name}, surname: {dataSelected.surname}, email: {dataSelected.email}, id:{dataSelected.id}</p>
    </PostulationContainer>
  )
}

export default CardPostulation

const PostulationContainer = styled.div`
    border: 2px solid #A2C3A4;
    width: 90%;
    padding: 10px;
    color: white;
    display: flex;
    margin: 5px;
    p{
      font-size: 8px;
      margin: 0;
      color:  #A2C3A4;
    }
`