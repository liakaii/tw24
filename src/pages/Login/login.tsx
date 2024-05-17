import { useState } from 'react';
import { Box, Button, TextField, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';



interface LoginPageProps {
  setUser: React.Dispatch<React.SetStateAction<{ avatar: string } | null>>;
}

const StyledLoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8px',
});

const BackButton = styled(IconButton)({
  position: 'absolute',
  top: 20,
  left: 20,
  zIndex: 1,
  borderRadius: '50%',
  padding: '10px',
});

const LoginForm: React.FC<LoginPageProps> = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleUsernameChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setUsername(value);

    if (!emailRegex.test(value)) {
      setError('Неверный индекс почты');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(password.length > 0);
    }
  };

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setPassword(value);
    setIsValid(value.length > 0 && emailRegex.test(username));
  };

  const handleLogin = () => {
    if (error || !isValid) {
      return;
    }
  
    setUser({ avatar: '../assets/av1.jpg' });  // Измените путь
    history.push('/');
  };
  

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <Box sx={{ mt: 8 }}>
      <BackButton>
      <IconButton
          sx={{ position: 'absolute', top: 80, left: -5, zIndex: 5, color: 'rgba(255, 255, 255, 1)' }}
          aria-label="back"
          onClick={handleBackClick}
        >
          <ArrowBackIcon />
        </IconButton>
      </BackButton>
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
          onChange={handleUsernameChange}
          error={!!error}
          helperText={error}
          sx={{ '& input': { color: 'lightblue' } }}
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
          onChange={handlePasswordChange}
          sx={{ '& input': { color: 'lightblue' } }}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
          disabled={!isValid}
        >
          Войти
        </Button>
      </StyledLoginForm>
    </Box>
  );
};

const LoginPage: React.FC<LoginPageProps> = ({ setUser }) => {
  return (
    <Container component="div" maxWidth="xs">
      <LoginForm setUser={setUser} />
    </Container>
  );
};

export default LoginPage;
