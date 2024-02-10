import { Button, Card, CardBody, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signInThunk } from 'store/auth/thunks';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    dispatch(signInThunk(data))
      .unwrap()
      .then(() => {
        return toast.success("You're logined!");
      })
      .catch(() => toast.error('Something went wrong!'));
  }

  return (
    <>
      <Card mx="auto" maxW="sm" p="6">
        <Heading as="h2" textAlign="center" mb="10">
          Sign In
        </Heading>
        <CardBody>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="email_login">
              Email
              <Input mb="5" {...register('email')} type="email" name="email" id="email_login" />
            </label>
            <label htmlFor="pass_login">
              Password
              <Input mb="5" {...register('password')} type="password" name="password" id="pass_login" />
            </label>
            <Button type="submit" colorScheme="teal">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginPage;