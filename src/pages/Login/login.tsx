import { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledLoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8px',
});

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography component="h1" variant="h5">
        Авторизация
      </Typography>
      <StyledLoginForm noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Имя пользователя"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >
          Войти
        </Button>
      </StyledLoginForm>
    </Box>
  );
};

const LoginPage = () => {
  return (
    <Container component="div" maxWidth="xs">
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
