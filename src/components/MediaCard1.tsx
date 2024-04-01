import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card1 from '../assets/card1.png';
import { useHistory } from 'react-router-dom';

export default function MediaCard1() {
  const history = useHistory();

  const handleReadClick = () => {
    history.push('/Arts');
  };

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0px',
        marginLeft: '-1000px',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={card1}
          title="films"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Фильмы
          </Typography>
          <Typography variant="body2" color="textSecondary">
          Фильмы рекомендуемые другими пользователями 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Поделиться</Button>
          <Button size="small" onClick={handleReadClick}>Смотреть</Button>
        </CardActions>
      </Card>
    </div>
  );
}