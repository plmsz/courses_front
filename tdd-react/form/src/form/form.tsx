import React, { useEffect, useState } from 'react';
import { Button, TextField, InputLabel, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const Form = () => {
  //   const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({
    name: '',
    size: '',
    type: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: { value: string };
      size: { value: string };
      type: { value: string };
    };

    if (formElements.name.value === '') {
      setFormErrors((prev) => ({ ...prev, name: 'The name is required' }));
    }
    if (formElements.size.value === '') {
      setFormErrors((prev) => ({ ...prev, size: 'The size is required' }));
    }
    if (formElements.type.value === '') {
      setFormErrors((prev) => ({ ...prev, type: 'The type is required' }));
    }
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Create product</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label='name'
          id='name'
          name='name'
          helperText={formErrors.name}
          error={formErrors.name !== ''}
        />

        <TextField
          label='size'
          id='size'
          name='size'
          helperText={formErrors.size}
          error={formErrors.size !== ''}
        />

        <InputLabel htmlFor='type'>Type</InputLabel>

        <Select
          native
          value=''
          error={formErrors.type !== ''}
          inputProps={{
            name: 'type',
            id: 'type',
          }}
        >
          <option aria-label='None' value='' />
          <option value='electronic'>Electronic</option>
          <option value='furniture'>Furniture</option>
          <option value='clothing'>Clothing</option>
        </Select>

        <FormHelperText error={formErrors.type !== ''}>
          {formErrors.type !== '' && formErrors.type}
        </FormHelperText>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
