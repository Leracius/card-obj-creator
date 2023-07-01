import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import {
  CardContainer,
  CardElStyled,
  CardElStyled2,
  CardFlex,
  CardLeft,
  CardRight,
} from './CardFormStyles';

import { setData, deleteData } from '../../redux/DataSlice';
import generateShortId from '../Utils/utils';

import CardPostulation from './CardPostulation';
import Input from './Input';
import Submit from './Submit';

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Campo requerido'),
  surname: Yup.string().trim().required('Campo requerido'),
  age: Yup.number()
    .integer('Debe ser un entero')
    .moreThan(17, 'Sos menor')
    .lessThan(95, 'Descansa un poco')
    .required('Campo requerido'),
  email: Yup.string().email('Email no valido').required('Campo requerido'),
  cellphone: Yup.string()
    .matches(phoneRegex, 'Numero de celular inválido')
    .required('Campo requerido'),
  exp: Yup.number().integer(),
  driveLicense: Yup.boolean(),
});

const CardForm = () => {
  const dispatch = useDispatch();
  const uniqueId = generateShortId(8);
  const { title, subtitle, check } = useSelector((state) => state.myString);
  const dataUser = useSelector((state) => state.newData.data);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleDelete = () => {
    dispatch(deleteData());
  };

  return (
    <CardContainer>
      <CardRight>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>

        <CardElStyled>
          <Formik
            initialValues={{
              id: '',
              name: '',
              surname: '',
              email: '',
              age: '',
              cellphone: '',
              driveLicense: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              const id = uniqueId;
              const newData = { ...values, id };
              dispatch(setData(newData));
              resetForm();
              console.log(newData);
            }}
          >
            {({ errors, touched }) => (
              <>
              <Form>
                <Input
                  isError={errors.name && touched.name}
                  name="name"
                  label="Nombre"
                  type="text"
                />
                <Input
                  isError={errors.surname && touched.surname}
                  name="surname"
                  label="Apellido"
                  type="text"
                />
                <Input
                  isError={errors.email && touched.email}
                  name="email"
                  label="Email"
                  type="email"
                />
                <Input
                  isError={errors.age && touched.age}
                  name="age"
                  label="Edad"
                  type="number"
                  readonly
                />
                <Input
                  isError={errors.cellphone && touched.cellphone}
                  name="cellphone"
                  label="Dejanos un número"
                  type="number"
                  readonly
                />
                <Input
                  isError={errors.exp && touched.exp}
                  name="exp"
                  label="Años de experiencia (No requerido)"
                  type="number"
                  readonly
                />
                <div>
                  <p>{check}</p>
                  <Input
                    isError={errors.driveLicense && touched.driveLicense}
                    name="driveLicense"
                    type="checkbox"
                    readonly
                  />
                </div>
                <Submit title={'ENVIAR'} />
              </Form>
              
              </>
            )}
          </Formik>
        </CardElStyled>
      </CardRight>
      {
        !active?
        <CardLeft>
        <button onClick={handleClick} ><AiOutlineArrowLeft size={20} color="#C4F1BE"/></button>
        <CardElStyled2>
          <CardFlex>
            {dataUser.map((el, index) => (
              <CardPostulation
                key={el.id}
                index={parseInt(index)}
              ></CardPostulation>
            ))}
          </CardFlex>
        </CardElStyled2>
        <div>
        <AiFillDelete
          size={25}
          color="#C4F1BE"
          onClick={handleDelete}/>
        </div>
          

        
      </CardLeft>
        :
      <>
      <CardLeft>
        <button onClick={handleClick}>ver data</button>
      </CardLeft>
      
      </>


      }

    </CardContainer>
  );
};

export default CardForm;