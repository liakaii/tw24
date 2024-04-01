import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card2 from '../assets/card2.gif';
import { useHistory } from 'react-router-dom';

export default function MediaCard2() {
  const history = useHistory();

  const handleReadClick = () => {
    history.push('/Art');  // Перенаправляем на страницу с картинками
  };

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-300px', // Высота всего экрана
        marginLeft: 'center', // Отступ слева
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={card2}
          title="furry_arts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Картинки
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Лучшие фурри картинки, арты, обои за последнюю неделю
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Поделиться</Button>
          <Button size="small" onClick={handleReadClick}>Открыть</Button>
        </CardActions>
      </Card>
    </div>
  );
}
