import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup"
import TextField from './TextField';
import "../App.css"


const SignUp = () => {
    const validate = Yup.object({
        Name : Yup.string()
                            .max(14, "Too Long!")
                            .required("Cannot be Empty!"),
        Email : Yup.string()
                            .email("Not a valid email!")
                            .required("Cannot be Empty!"),
        password : Yup.string()
                            .min(6, "Too Short!")
                            .required("Cannot be Empty!")
    })
  return <div className='form'>
      <Formik
      
        initialValues={{
                Name : "",
                Email : "",
                password : ""
            }}

        validationSchema={ validate }

        onSubmit={(values) =>
        console.log(values)}

      >
          {formik => (
              <div>
                  <h1 className='header'>
                      Sign Up
                  </h1>
                  <Form>
                  <TextField label= "Name" type = "text" name = "Name" />
                  <TextField label= "E-mail" type = "email" name = "Email" />
                  <TextField label= "Password" type = "password" name = "password" />
                  <button type='submit'></button>
                  </Form>
              </div>
          )}

      </Formik>
  </div>;
};

export default SignUp;
