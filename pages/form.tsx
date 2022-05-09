import React, { useState } from 'react';
import { FieldError, FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    reset,
    resetField,
  } = useForm<LoginForm>({
    mode: 'onChange',
  });
  const onValid = (data: LoginForm) => {
    console.log('hi');
    reset();
    resetField('email');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            message: 'Username은 5자 이상으로 입력해야 합니다.',
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) =>
              !value.includes('@gmail.com')
                ? ''
                : 'gmail은 사용하실 수 없습니다.',
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? 'border-red-600' : ''}`}
      />
      {errors.email?.message}
      <input
        {...register('password', {
          required: 'password is required',
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
