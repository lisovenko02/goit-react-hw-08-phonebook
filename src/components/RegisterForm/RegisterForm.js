import { ErrorMessage, Formik } from 'formik';
import { Fields, Forms, Label } from './RegisterForm.styled';
import { GiArchiveRegister } from "react-icons/gi";
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  
  const authSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().nullable().email().required(),
    password: Yup
      .string()
      .min(5, 'must be at least 5 characters long')
      .required(),
  });


  return (
        <div style={{
            padding:"40px"
        }}>
            <Formik
           initialValues={{ name: '', email: '', password: '' }}
           validationSchema = {authSchema}
           onSubmit={(values, {resetForm}) => {
            dispatch(register({
              name: values.name,
              email: values.email,
              password: values.password,
            }))
            resetForm();
          }}
         >
           {() => (
             <Forms>
                <Label>
                    Name
                    <Fields type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </Label>
                <Label>
                    Email
                    <Fields type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </Label>
                <Label>
                        Password 
                    <Fields type="password" name="password" autoComplete="on"/>
                    <ErrorMessage name="password" component="div" />
                </Label>
               <Button 
               variant="contained" 
               type="submit"
               color="secondary">
                    <GiArchiveRegister size={30}/>
               </Button>
             </Forms>
           )}
         </Formik>
        </div>
      );
}