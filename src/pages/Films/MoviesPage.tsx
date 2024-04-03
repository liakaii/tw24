import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import ForumIcon from '@mui/icons-material/Forum';
import ContactsIcon from '@mui/icons-material/Contacts';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';


import movie1 from '../../assets/movie1.jpg';
import movie2 from '../../assets/movie2.png';
import movie3 from '../../assets/movie3.jpg';
import movie4 from '../../assets/movie4.jpg';
import movie5 from '../../assets/movie5.jpg';
import movie6 from '../../assets/movie6.jpg';
import movie7 from '../../assets/movie7.jpg';
import movie8 from '../../assets/movie8.jpg';
import movie9 from '../../assets/movie9.jpeg';

const movies = [
  { img: movie1, title: 'Семь Жизней', year: '19 декабря 2008 г.', link: 'https://kinogo.biz/13265-sem-zhiznej.html' },
  { img: movie2, title: 'Мстители', year: '27 апреля 2018 г.', link: 'https://kinogo.biz/23263-mstiteli-vojna-beskonechnosti.html' },
  { img: movie3, title: 'Властелин Колец', year: '19 декабря, 2001 г.', link: 'https://kinogo.biz/21709-vlastelin-kolec-bratstvo-kolca-2001.html' },
  { img: movie4, title: 'Интерстеллар', year: '26 октября 2014 г.', link: 'https://kinogo.biz/17487-interstellar.html' },
  { img: movie5, title: 'Терминатор', year: '26 октября 1984 г.', link: 'https://kinogo.biz/14042-terminator-1984.html' },
  { img: movie6, title: 'Титаник', year: '19 декабря 1997 г.', link: 'https://kinogo.biz/21426-titanik.html' },
  { img: movie7, title: 'Корабль - призрак', year: '22 октября 2002 г.', link: 'https://kinogo.biz/18406-korabl-prizrak.html' },
  { img: movie8, title: 'Час Пик', year: '18 сентября 1998 г.', link: 'https://kinogo.biz/20030-chas-pik.html' },
  { img: movie9, title: 'Зачётный препод', year: '7 ноября 2013 г.', link: 'https://kinogo.biz/20063-zachetnyj-prepod.html' },
];
const MoviesPage = () => {
  const history = useHistory();

  const handleMovieClick = (link: string) => {
    window.open(link, '_blank');
  };

  const handleGoBack = () => {
    history.push('/');
  };

  // const handleReadClick = () => {
  //   history.push('/LogIn');
  // };

  const handleInfoClick = () => {
    history.push('/TechnicalWork');
  };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  // const [devices, setDevices] = React.useState(() => ['laptop']);

  // const handleDevices = (
  //   _event: React.MouseEvent<HTMLElement>,
  //   newDevices: string[],
  // ) => {
  //   if (newDevices.length) {
  //     setDevices(newDevices);
  //   }
  // };

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      <AppBar position="fixed" sx={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, marginRight: '335px' }}
          >
            Список фильмов
          </Typography>

          <IconButton 
            style={{
              position: 'absolute',
              top: 80,
              left: 11,
              zIndex: 1,
              borderRadius: '50%',
              padding: '10px',
            }}
            onClick={handleGoBack} 
          >
            <ArrowBackIcon sx={{ fontSize: 30, color: '#ffffff' }} />
          </IconButton>

          <Drawer 
            anchor="left" 
            open={isDrawerOpen} 
            onClose={toggleDrawer(false)}
            sx={{
              width: 250,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                  width: 250,
                  boxSizing: 'border-box',
                  background: 'linear-gradient(to bottom, #9AB9EF, rgba(26, 26, 26, 1 ))',
                  opacity: 1,
              },
            }}
          >
            <div
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                  <ListItemText primary="Профиль" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><MailIcon /></ListItemIcon>
                  <ListItemText primary="Сообщения" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><ForumIcon /></ListItemIcon>
                  <ListItemText primary="Треды" />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><ContactsIcon /></ListItemIcon>
                  <ListItemText primary="Контакты" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><PhotoIcon /></ListItemIcon>
                  <ListItemText primary="Фотографии" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><VideoCallIcon /></ListItemIcon>
                  <ListItemText primary="Видео" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary="Настройки" />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><InfoIcon /></ListItemIcon>
                  <ListItemText primary="Информация" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><SupportIcon /></ListItemIcon>
                  <ListItemText primary="Поддержка" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>

      <Box 
        style={{ 
          backgroundImage: `url('path_to_your_background_image.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          marginTop: '64px',
          paddingTop: '20px'
        }}
      >
        <ImageList 
          sx={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',  
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }} 
          cols={3}
        >
          {movies.map((movie, index) => (
            <ImageListItem 
              key={index} 
              style={{ 
                marginBottom: '20px',
                marginTop: '30px',  
                width: '30%', 
                marginRight: '1%', 
                height: '550px',
                overflow: 'hidden'
              }}
            >
              <img
                srcSet={`${movie.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${movie.img}?w=248&fit=crop&auto=format`}
                alt={movie.title}
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }} 
              />
              <ImageListItemBar
                title={movie.title}
                subtitle={movie.year}
                actionIcon={
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    endIcon={<InfoIcon />}
                    onClick={() => handleMovieClick(movie.link)}
                  >
                    Подробнее
                  </Button>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default MoviesPage;