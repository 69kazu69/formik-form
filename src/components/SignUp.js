import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup"
import TextField from './TextField';
import "../App.css"
import { Flex, Heading, Button } from '@chakra-ui/react';


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
  return <Flex direction = "column" justify="center" align="center" h="93vh">
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
              <Flex direction="column" align="center" justify="center" bg="gray.900" w="400px" h="50vh" boxShadow='dark-lg' p='6' >
                  <Heading fontSize = "4xl"  my="10" >
                      Sign Up
                  </Heading>
                  <Form>
                  <TextField label= "Name" type = "text" name = "Name" />
                  <TextField label= "E-mail" type = "email" name = "Email" />
                  <TextField label= "Password" type = "password" name = "password" />
                  <Button  type='submit' my="7" mx="100" colorScheme="teal"> Submit </Button>
                  </Form>
              </Flex>
          )}

      </Formik>
  </Flex>;
};

export default SignUp;
