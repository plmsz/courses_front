import React, { useState } from 'react';
import {
  Button,
  TextField,
  InputLabel,
  FormControl,
  NativeSelect,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import { saveProduct } from '../services/productServices';
import { CREATED_STATUS, ERROR_SERVER_STATUS, INVALID_REQUEST_STATUS } from '../constants/httpStatus';

const Form = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    size: '',
    type: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const validateField = (name: string, value: string) => {
    setFormErrors((prev) => ({
      ...prev,
      [name]: value.length ? '' : `The ${name} is required`,
    }));
  };
  const validateForm = (
    name: { value: string },
    size: { value: string },
    type: { value: string }
  ) => {
    validateField('name', name.value);
    validateField('size', size.value);
    validateField('type', type.value);
  };

  const handleFetchError = async (error: Response) => {
    if (error.status === ERROR_SERVER_STATUS) {
      setErrorMessage('Unexpected error, please try again');
      return;
    }
    if (error.status === INVALID_REQUEST_STATUS) {
      const data = await error.json();
      setErrorMessage(data.message);
      return;
    }
    setErrorMessage('Connection error, please try later')
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSaving(true);

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: { value: string };
      size: { value: string };
      type: { value: string };
    };

    const { name, size, type } = formElements;

    validateForm(name, size, type);

    const body = {
      name: name.value,
      size: size.value,
      type: type.value,
    };

    try {
      const response = await saveProduct(body);

      if (!response.ok) {
        throw response;
      }
      if (response.status === CREATED_STATUS) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      if (error instanceof Response) {
        handleFetchError(error);
      }
    }

    setIsSaving(false);
  };

  const handleBlur = ({
    target: { name, value },
  }: React.FocusEvent<HTMLInputElement>) => {
    validateField(name, value);
  };

  return (
    <div>
      <h1>Create product</h1>
      {isSuccess && <p>Product stored</p>}
      <p>{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <TextField
          label='name'
          id='name'
          name='name'
          helperText={formErrors.name}
          error={formErrors.name !== ''}
          onBlur={handleBlur}
        />

        <TextField
          label='size'
          id='size'
          name='size'
          helperText={formErrors.size}
          error={formErrors.size !== ''}
          onBlur={handleBlur}
        />
        <FormControl>
          <InputLabel variant='outlined' htmlFor='type-select'>
            Type
          </InputLabel>
          <NativeSelect
            defaultValue=''
            inputProps={{
              name: 'type',
              id: 'type-select',
            }}
            error={formErrors.type !== ''}
            onBlur={handleBlur}
          >
            <option value=''></option>
            <option value='electronic'>electronic</option>
            <option value='furniture'>furniture</option>
            <option value='clothing'>clothing</option>
          </NativeSelect>
          <FormHelperText error={formErrors.type !== ''}>
            {formErrors.type !== '' && formErrors.type}
          </FormHelperText>
        </FormControl>
        <Button
          disabled={isSaving}
          type='submit'
          color='primary'
          variant='contained'
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
