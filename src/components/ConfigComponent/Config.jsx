import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardEl, StyledButton } from './ConfigStyles';
import { FaPen } from 'react-icons/fa';
import { BsEscape } from 'react-icons/bs';
import { InputStyled } from '../../components/CardForm/Input';
import { setString, setAdditionalValue1, setAdditionalValue2 } from '../../redux/ConfigSlice';


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
    dispatch(setString(inputValue1));
    dispatch(setAdditionalValue1(inputValue2));
    dispatch(setAdditionalValue2(inputValue3))
  

    setInputValue1('');
    setInputValue2('');
    setInputValue3('')

    setActive(false);
  };
  

  return (
    <CardEl>
      {active ? (
        <>
          <div>
            <BsEscape onClick={handleClick} size={20} color="#C4F1BE" />
          </div>
          <form onSubmit={handleSubmit}>
          <InputStyled
            value={inputValue1}
             onChange={(event) => setInputValue1(event.target.value)}
            placeholder="H1"
            />
            <InputStyled
             value={inputValue2}
            onChange={(event) => setInputValue2(event.target.value)}
            placeholder="H2"
            />
            <InputStyled
             value={inputValue3}
            onChange={(event) => setInputValue3(event.target.value)}
            placeholder="check"
            />
            <StyledButton type="submit">Guardar</StyledButton>
          </form>
        </>
      ) : (
        <FaPen onClick={handleClick} size={20} color="#C4F1BE" />
      )}
    </CardEl>
  );
};

export default Config;
