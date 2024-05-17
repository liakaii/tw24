import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';

const BackButton = styled(IconButton)({
  position: 'absolute',
  top: 20,
  left: 20,
  zIndex: 1,
  borderRadius: '50%',
  padding: '10px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const NotFound = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <BackButton>
      <IconButton
          sx={{ position: 'absolute', top: 80, left: -5, zIndex: 5, color: 'rgba(255, 255, 255, 1)' }}
          aria-label="back"
          onClick={handleBackClick}
        >
          <ArrowBackIcon />
        </IconButton>
      </BackButton>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Typography variant="h4" gutterBottom>
          404 - Страница не найдена
        </Typography>
        <Typography variant="body1">
          Извините, запрошенная вами страница не найдена.
        </Typography>
      </div>
    </div>
  );
};

export default NotFound;
