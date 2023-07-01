import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import styled from 'styled-components';

interface FormData {
  id: string;
  name: string;
  surname: string;
  email: string;
  age: number;
  cellphone: string;
  driveLicense: boolean;
  exp?: number;
}

interface CardPostulationProps {
  index: number;
}

const CardPostulation: React.FC<CardPostulationProps> = ({ index }) => {
  const dataUser: FormData[] = useSelector((state: { newData: { data: FormData[] } }) => state.newData.data);

  const { name, surname, email, age, driveLicense, exp, cellphone } = dataUser[index];

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <PostulationContainer active={active} onClick={handleClick}>
      {active ? (
        <AiFillMinusCircle size={20} color="#C4F1BE" />
      ) : (
        <>
          <AiFillPlusCircle size={20} color="#C4F1BE" />
          <h2>{name} {surname} {age}</h2>
        </>
      )}

      {active && (
        <ul>
          <li>Nombre: {name}</li>
          <li>Apellido: {surname}</li>
          <li>Correo electrónico: {email}</li>
          <li>Edad: {age}</li>
          <li>Número de celular: {cellphone}</li>
          <li>Licencia: {driveLicense ? 'tiene licencia' : 'no tiene licencia'}</li>
          <li>Años de experiencia: {exp ? `${exp}` : '0'}</li>
        </ul>
      )}
    </PostulationContainer>
  );
};

export default CardPostulation;

interface PostulationContainerProps {
  active: boolean;
}

const PostulationContainer = styled.div<PostulationContainerProps>`
  border: 2px solid #a2c3a4;
  margin-bottom: 5px;
  width: 95%;
  padding: 5px;
  display: flex;
  flex-direction: ${(props) => (props.active ? 'column' : 'row')};
  h2 {
    font-size: 14px;
    margin: 0 0 0 10px;
    color: #a2c3a4;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    color: #a2c3a4;
    margin-bottom: 3px;
    font-size: 12px;
  }
`;
