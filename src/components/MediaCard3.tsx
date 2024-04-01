import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card3 from '../assets/card3.png';

export default function MediaCard3() {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-300px', // Высота всего экрана
     
        marginRight: '-1000px', // Отступ слева
      }}
    >
      <Card sx={{ maxWidth: 345}}>
        <CardMedia
          sx={{ height: 140 }}
          image={card3}
          title="guns"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Оружие
          </Typography>
            <Typography variant="body2" color="text.secondary">
            Список интересного вооружиения по мнению сталкеров
              
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
