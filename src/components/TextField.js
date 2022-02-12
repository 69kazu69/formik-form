import React from 'react';
import { useField, ErrorMessage, } from 'formik';
import "../App.css"
import { Input, Text,  Box } from '@chakra-ui/react'

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return <Box h="70px" className='input-container'>
        <Input variant = "filled" {...field} {...props}
        placeholder = {label}
         className='input'
         
        />
        
        <Text color="crimson" fontSize="xs" mx="3">
        <ErrorMessage component="div" name={field.name} className='error' />

        </Text>
  </Box>;
};

export default TextField;
