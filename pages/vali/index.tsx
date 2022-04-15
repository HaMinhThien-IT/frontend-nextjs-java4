import { Checkbox, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { rules } from '../../src/helper/rule';
interface Test {
  a: string;
  b: string;
}
interface IFormInputs {
  test: Test;
}

export default function Hooksss() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="test.a"
        control={control}
        defaultValue={''}
        rules={rules.image}
        render={({ field }) => <TextField {...field} />}
      />
      <input type="submit" />
      <p> {errors.test?.a.message}</p>
    </form>
  );
}
