import Typography from '@mui/material/Typography';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        404 - Страница не найдена
      </Typography>
      <Typography variant="body1">
        Извините, запрошенная вами страница не найдена.
      </Typography>
    </div>
  );
};

export default NotFound;  // Убедитесь, что экспорт присутствует
