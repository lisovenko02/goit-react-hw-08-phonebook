import { Button } from '@mui/material';
import { ErrorMessage, Formik } from 'formik';
import { GiArchiveRegister } from "react-icons/gi";
import { Fields, Forms, Label } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';


export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div style={{
        padding:"40px"
    }}>
        <Formik
       initialValues={{ email: '', password: '' }}
    //    validationSchema = {contactsSchema}
       onSubmit={(values, actions) => {
        dispatch(login({
          email: values.email,
          password: values.password,
        }))
        actions.resetForm();
      }}
     >
       {() => (
         <Forms>
            <Label>
                Email
                <Fields type="text" name="email" />
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
};