import { Button, Card, CardBody, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { signUpThunk } from 'store/auth/thunks';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(signUpThunk(data))
      .unwrap()
      .then(() => {
        return toast.success("You're logined!");
      })
      .catch(err => {
        toast.error(err);
      });
  }
  return (
    <>
      <Card maxW="md" mx="auto" p="6">
        <Heading as="h2" textAlign="center" mb="8">
          Sign Up
        </Heading>
        <CardBody>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name_reg">
              Name
              <Input mb="5" {...register('name')} type="text" name="name" id="name_reg" />
            </label>
            <label htmlFor="email_reg">
              Email
              <Input mb="5" {...register('email')} type="text" name="email" id="email_reg" />
            </label>
            <label htmlFor="pass_reg">
              Password
              <Input mb="5" marginBottom="15px" {...register('password')} type="text" name="password" id="pass_reg" />
            </label>
            <Button type="submit" colorScheme="teal">
              Sign Up
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterPage;