import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from "yup"
import TextField from './TextField';
import "../App.css"
import { Flex, Heading, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';


const SignUp = () => {


    const [showtick, setShowtick] =useState(false)

   let MFlex = motion(Flex)

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
  return <Flex direction = "column" justify="center" align="center" h="100vh" bg="gray.800"w="100vw" >
      <Formik
      
        initialValues={{
                Name : "",
                Email : "",
                password : ""
            }}

        validationSchema={ validate }

        onSubmit={(values) =>{
        
    
        setShowtick(true)
    
    }}

        

      >
          {
              !showtick ? (
                formik => (
                    <MFlex direction="column" align="center" justify="center" bg="gray.900" w="400px" h="50vh" boxShadow='dark-lg' p='6' borderRadius="5px"
                    
                    initial = {{
                        scale : 0,
                        opacity : 0
                    }}
                    
                    animate = {{
                        scale : 1,
                        opacity : 1
                    }}
                    
                    transition={{
                        duration : .8
                    }}
                    
                    >
                        <Heading fontSize = "4xl"  my="10" color ="gray.100">
                            Sign Up
                        </Heading>
                        <Form >
                        <TextField label= "Name" type = "text" name = "Name" />
                        <TextField label= "E-mail" type = "email" name = "Email" />
                        <TextField label= "Password" type = "password" name = "password" />
                        <Button  type='submit' my="7" mx="100" colorScheme="teal"> Submit </Button>
                        </Form>
                    </MFlex>
                ))
                :
              (


              <MFlex w="150px" h="150px" justify="center" align="center" bg= "gray.900" boxShadow="dark-lg" borderRadius="10rem"
              
              initial = {{
                  scale :0,
                  opacity :0
              }}
              
              animate = {{
                  scale : 1,
                  opacity :1
              }}
              
              transition = {{
                  duration : .6
              }}>
                        <Heading  fontSize ="6xl" color = "gray.500">
                                ✌️
                        </Heading>
              </MFlex>
              )
          }

      </Formik>
  </Flex>;
};

export default SignUp;
