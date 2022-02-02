import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup"
import TextField from './TextField';

const SignUp = () => {
  return <div>
      <Formik
      
        initialValues={
            {
                Name : "",
                Email : "",
                password : ""
            }
        }

        validationSchema={
                    Yup.object({
                        tName : Yup.string()
                                            .max(14, "Too Long!")
                                            .required("Cannot be Empty!"),
                        Email : Yup.string()
                                            .email("Not a valid email!")
                                            .required("Cannot be Empty!"),
                        password : Yup.string()
                                            .min(6, "Too Short!")
                                            .required("Cannot be Empty!")
                    })
        }

      >
          {formik => (
              <div>
                  <h1>
                      Sign Up
                  </h1>
                  <Form>
                  <TextField label= "Name" type = "text" name = "Name" />
                  <TextField label= "E-mail" type = "email" name = "Email" />
                  <TextField label= "Password" type = "password" name = "password" />
                  </Form>
              </div>
          )}
      </Formik>
  </div>;
};

export default SignUp;
