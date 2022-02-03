import React from 'react';
import { useField, ErrorMessage } from 'formik';
import "../App.css"

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return <div className='input-container'>
        <label htmlFor={field.name} className='input-label'>{label}</label>
        <input  {...field} {...props}
         className='input'
        />
   <ErrorMessage component="div" name={field.name} className='error' />
  </div>;
};

export default TextField;
