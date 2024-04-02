import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const TechnicalWorkPage: React.FC = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  };

  return (
    <div>
      <Typography variant="h5">
      По этому маршруту ведутся технические работы.
      </Typography>
      <Typography variant="body1">
      <div className="spacer"></div>В данный момент содержимое не доступно.
      </Typography>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <Button variant="contained" color="primary" onClick={handleHomeClick} style={{ marginTop: '20px' }}>
        На главную
      </Button>
    </div>
  );
};

export default TechnicalWorkPage;
