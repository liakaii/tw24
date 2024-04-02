import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';

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

  return (
    <div 
      style={{ 
        backgroundImage: `url('path_to_your_background_image.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 'calc(100vh - 64px)',
      }}
    >
      <IconButton 
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 1,
          borderRadius: '50%',
          padding: '10px',
        }}
        onClick={handleGoBack} 
      >
        <ArrowBackIcon sx={{ fontSize: 30, color: '#ffffff' }} />
      </IconButton>
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
              width: '30%', 
              marginRight: '3%', 
              height: '550px', // Фиксированная высота для каждой карты
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
    </div>
  );
};

export default MoviesPage;