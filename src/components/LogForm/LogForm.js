import { useDispatch} from 'react-redux';
import Notiflix from 'notiflix';
import { logIn } from 'reduxFiles/auth/operations';
import { Button, Form, Input, Label } from './LoginFormStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    ).unwrap()
    .then(() => {
      
      Notiflix.Notify.success(
        `Login successfully! `
      );
      
    })
    .catch(error => {
      Notiflix.Notify.failure(
        `Incorrect login or password: ${error}`
      );
    });
  
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
