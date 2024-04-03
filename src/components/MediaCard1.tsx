import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card1 from '../assets/card1.png';
import { useHistory } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function MediaCard1() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [link] = useState(window.location.href);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
  };

  const handleTelegramShare = () => {
    window.open(`https://web.telegram.org/#/im?text=${encodeURIComponent(link)}`, '_blank');
  };

  const handleWhatsAppShare = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`, '_blank');
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`, '_blank');
  };

  const handleWatchClick = () => {
    history.push('/Films');
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
          <Button size="small" onClick={handleOpen}>Поделиться</Button>
          <Button size="small" onClick={handleWatchClick}>Смотреть</Button>
        </CardActions>
      </Card>

      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{ 
          sx: { 
            border: '2px solid #00BFFF',
            borderRadius: '10px',
            backgroundColor: '#D5C1F9',
            boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 1)',
            width: '400px',
            height: '190px',
            padding: '20px'
          } 
        }}
      >
        <DialogTitle>Скопировать ссылку:</DialogTitle>
        <DialogContent sx={{ overflow: 'hidden' }}> 
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input 
              type="text" 
              style={{ flex: 1 }} 
              value={link}
              readOnly
            />
            <IconButton onClick={handleCopyLink}>
              <FileCopyIcon />
            </IconButton>
          </div>
          <DialogContentText>Поделиться:</DialogContentText>
          <DialogActions>
            <IconButton onClick={handleTelegramShare}>
              <TelegramIcon />
            </IconButton>
            <IconButton onClick={handleWhatsAppShare}>
              <WhatsAppIcon />
            </IconButton>
            <IconButton onClick={handleFacebookShare}>
              <FacebookIcon />
            </IconButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}