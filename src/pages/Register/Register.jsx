import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/userOperation';
import { Container } from '@mui/system';
export default function Register() {
  const dispatch = useDispatch();
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleInputChange = evt => {
    const inputName = evt.currentTarget.name;
    const inputValue = evt.currentTarget.value;
    switch (inputName) {
      case 'name':
        setRegisterName(inputValue);
        break;
      case 'email':
        setRegisterEmail(inputValue);
        break;
      case 'password':
        setRegisterPassword(inputValue);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const user = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };
    dispatch(operations.register(user));
    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
  };

  return (
    <Container>
      <Typography align="center" variant="h6" component="h3" pt={3} mb={5}>
        Register:
      </Typography>
      <form action="" onSubmit={handleFormSubmit}>
        <Grid container direction="column" alignItems="center" spacing={6}>
          <Grid item>
            <TextField
              sx={{ width: '50ch' }}
              variant="filled"
              size="small"
              label="Name"
              type="email"
              name="email"
              value={registerName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ width: '50ch' }}
              variant="filled"
              size="small"
              label="E-mail"
              type="email"
              name="email"
              value={registerEmail}
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
              value={registerPassword}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button type="submit">Register</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
