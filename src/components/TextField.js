import React from 'react';
import { useField } from 'formik';
import "../App.css"

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return <div className='input-container'>
        <label htmlFor={field.name} className='input-label'>{label}</label>
        <input  {...field} {...props}
         className='input'
        />
  </div>;
};

export default TextField;
