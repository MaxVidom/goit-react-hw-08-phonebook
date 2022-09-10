import { Container } from '@mui/system';
import { Typography, TextField, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const inputName = evt.currentTarget.name;
    const inputValue = evt.currentTarget.value;
    switch (inputName) {
      case 'email':
        setEmail(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(authOperations.logIn(user));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Typography align="center" variant="h6" component="h3" pt={3} mb={5}>
        Login:
      </Typography>
      <form action="" onSubmit={handleFormSubmit}>
        <Grid container direction="column" alignItems="center" spacing={6}>
          <Grid item>
            <TextField
              sx={{ width: '50ch' }}
              variant="filled"
              size="small"
              label="E-mail"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ width: '50ch' }}
              variant="filled"
              size="small"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button type="submit">Login</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
