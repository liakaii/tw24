import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card1 from '../assets/card1.png';

export default function MediaCard1() {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80px', // Высота всего экрана
        marginLeft: '-1000px', // Отступ слева
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
            Картинки
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Лучшие фурри картинки, арты, обои за последнюю неделю
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Поделиться</Button>
          <Button size="small">Прочесть</Button>
        </CardActions>
      </Card>
    </div>
  );
}
