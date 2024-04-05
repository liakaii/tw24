import Box from '@mui/material/Box';
import NewBar from '../../components/NewBar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
// import { useImage } from '../../ImageContext';
  

import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.gif';
import p6 from '../../assets/p6.jpg';
import p7 from '../../assets/p7.jpg';
import p8 from '../../assets/p8.gif';
import p9 from '../../assets/p9.jpg';
import p10 from '../../assets/p10.gif';
import p11 from '../../assets/p11.png';
import p12 from '../../assets/p12.jpg';

export default function Art() {
  const history = useHistory();
  // const { addImage } = useImage(); 

  const handleBackClick = () => {
    history.goBack();
  };

  const itemData = [
    {
      img: p1,
      title: 'AngryCat',
      author: '@fufel',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: p2,
      title: 'wallpaper',
      author: '@aestethic',
    },
    {
      img: p3,
      title: 'pain',
      author: '@fufrik',
    },
    {
      img: p4,
      title: 'FOX',
      author: '@Alia_93',
      cols: 2,
    },
    {
      img: p5,
      title: 'boi',
      author: '@mauzymice',
      cols: 2,
    },
    {
      img: p6,
      title: 'Mr. Kat',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: p7,
      title: 'autumn_cat',
      author: '@LemanRys',
    },
    {
      img: p8,
      title: 'lel',
      author: '@Biba',
    },
    {
      img: p9,
      title: 'My_friend',
      author: '@Stephenson 2-18',
      rows: 2,
      cols: 2,
    },
    {
      img: p10,
      title: 'Furry plane',
      author: '@AirPlane',
    },
    {
      img: p11,
      title: 'Arcade',
      author: '@Backrooms',
    },
    {
      img: p12,
      title: 'remnants of the moon',
      author: '@VA-11 Hall-A',
      cols: 2,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', backgroundImage: `url('path_to_your_background_image.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <NewBar />

      <Box sx={{ marginTop: '64px' }}>
        <IconButton
          sx={{ position: 'absolute', top: 80, left: 16, zIndex: 1, color: 'rgba(255, 255, 255, 1)' }}
          aria-label="back"
          onClick={handleBackClick}
        >
          <ArrowBackIcon />
        </IconButton>

        <ImageList 
          sx={{ 
            width: '100%', 
            height: 'calc(100vh - 64px)',  
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
          }}
          style={{ gap: '15px', rowGap: '20px' }} 
        >
          {itemData.map((item) => (
            <ImageListItem 
              key={item.img} 
              cols={1} 
              style={{ marginBottom: '20px', width: '25%', maxWidth: '20%' }} 
            >
              <img
      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
      src={`${item.img}?w=248&fit=crop&auto=format`}
      alt={item.title}
      loading="lazy"
      style={{ width: '100%' }}
      // onClick={() => addImage(item.img)}
    />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => window.open(item.img, '_blank')}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
