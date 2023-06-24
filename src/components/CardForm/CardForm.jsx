import React from 'react';
import { CardContainer, CardElStyled, CardFlex, CardLeft, CardRight, Form } from './CardFormStyles';
import { useFormik } from 'formik';
import Input from './Input';
import Submit from './Submit';
import { useSelector, useDispatch } from 'react-redux';
import { setData, deleteData } from '../../redux/DataSlice';
import CardPostulation from './CardPostulation';
import generateShortId from '../Utils/utlis';
import { BiLogoReact } from 'react-icons/bi'


const CardForm = () => {
  const dispatch = useDispatch();

  const uniqueId = generateShortId(8); 

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      id: '',
      name: '',
      surname: '',
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      const id = uniqueId;
      const newData = { ...values, id };
      dispatch(setData(newData));
      resetForm();
    },
  });

  const dataUser = useSelector((state) => state.newData.data);

  const handleDelete = () =>{
    dispatch(deleteData())
  }

  return (
    <CardContainer>
      <CardLeft>
        <h1>POSTULACIONES:</h1>
        <CardElStyled>
          <CardFlex>
            {dataUser.map((el, index) => {
              return <CardPostulation key={el.id} index={parseInt(index)} ></CardPostulation>;
            })}
          </CardFlex>
        </CardElStyled>
        <BiLogoReact size={35} color='#C4F1BE' onClick={handleDelete}/>
      </CardLeft>
      <CardRight>
        <h1>¿Te gustaría pilotear para nosotros?</h1>
        <h4>Ingresa algunos datos para ponernos en contacto</h4>
        <Form>
          <Input handleChange={handleChange} value={values.name} name="name" label="Nombre" type="text" />
          <Input handleChange={handleChange} value={values.surname} name="surname" label="Apellido" type="text" />
          <Input handleChange={handleChange} value={values.email} name="email" label="Email" type="email" />
          <Submit onSubmit={handleSubmit} title={"ENVIAR"}/>
        </Form>
      </CardRight>
    </CardContainer>
  );
};

export default CardForm;
