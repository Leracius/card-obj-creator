import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardEl, StyledButton, InputStyled} from './ConfigStyles';
import { FaPen } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { setConfig1, setConfig2, setConfig3 } from '../../redux/ConfigSlice';


const Config = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleClick = () => {
    setActive(!active);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setConfig1(inputValue1));
    dispatch(setConfig2(inputValue2));
    dispatch(setConfig3(inputValue3))
  

    setInputValue1('');
    setInputValue2('');
    setInputValue3('')

    setActive(false);
  };
  

  return (


    <>
    <CardEl active={active}>
      {active ? (
        <>
          
          <div>
            <p>Preferencias</p><AiOutlineArrowLeft onClick={handleClick} size={20} color="#C4F1BE" />
          </div>
          <form onSubmit={handleSubmit}>
          <InputStyled
            value={inputValue1}
             onChange={(event) => setInputValue1(event.target.value)}
            placeholder="Título"
            />
            <InputStyled
             value={inputValue2}
            onChange={(event) => setInputValue2(event.target.value)}
            placeholder="Subtitulo"
            />
            <InputStyled
             value={inputValue3}
            onChange={(event) => setInputValue3(event.target.value)}
            placeholder="Texto sobre checkbox"
            />
            <StyledButton type="submit">Guardar</StyledButton>
          </form>
        </>
      ) : (
        <FaPen onClick={handleClick} size={20} color="#C4F1BE" />
      )}
    </CardEl>
    </>
  );
};

export default Config;
