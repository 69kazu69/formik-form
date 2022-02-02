import React from 'react';
import { useField } from 'formik';

const TextField = ({label, ...props}) => {
    const [field, meta] = useField()
  return <div>
        <label htmlFor={field.name}>{label}</label>
        <input  {...field} {...props}
        autoComplete='off'
        />
  </div>;
};

export default TextField;
