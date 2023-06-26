import React from 'react';
//syled-coomponents
import { CardContainer, CardElStyled, CardFlex, CardLeft, CardRight, Form } from './CardFormStyles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { setData, deleteData } from '../../redux/DataSlice';
//id unique generate funtion
import generateShortId from '../Utils/utlis';
//components
import CardPostulation from './CardPostulation';
import Input from './Input';
import Submit from './Submit';
//react-icons
import { AiFillDelete } from 'react-icons/ai'
//formik
import { Formik } from 'formik';
//yup
import * as Yup from 'yup'

const phoneRegex = /\d{10}$/ //minimo de 10 numeros

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  surname: Yup.string().trim().required("Campo requerido"),
  // age: Yup.number().integer("Debe ser un entero").moreThan(17, "Sos menor").lessThan(95,"Descansa un poco").required("Campo requerido"),
  email: Yup.string().email("Email no valido").required("Campo requerido"),
  // cellphone: Yup.string().matches(phoneRegex, "Numero de calular inválido")

})

const CardForm = () => {
  const dispatch = useDispatch();

  const uniqueId = generateShortId(8); 

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
        <AiFillDelete size={35} color='#C4F1BE' onClick={handleDelete}/>
      </CardLeft>
      <CardRight>
        <h1>¿Te gustaría pilotear para nosotros?</h1>
        <h4>Ingresa algunos datos para ponernos en contacto</h4>
        
        <Formik
          initialValues={{
            id: '',
            name: '',
            surname: '',
            email: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) => {
            const id = uniqueId;
            const newData = { ...values, id };
            dispatch(setData(newData));
            resetForm();
          }}
        >

          {
            ({ errors, touched })=>(
            <Form>
              <Input isError={errors.name && touched.name} name="name" label="Nombre" type="text" />
              <Input isError={errors.surname && touched.surname} name="surname" label="Apellido" type="text" />
              <Input isError={errors.email && touched.email} name="email" label="Email" type="email" />
              <Submit title={"ENVIAR"}/>
            </Form>
            )
          }

        </Formik>
        

        
      </CardRight>
    </CardContainer>
  );
};

export default CardForm;
