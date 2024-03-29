import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card2 from '../assets/card2.gif';

export default function MediaCard2() {
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
            Фильмы
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Фильмы рекомендуемые другими пользователями
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
