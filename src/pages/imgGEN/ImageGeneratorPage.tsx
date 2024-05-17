import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RefreshIcon from '@mui/icons-material/Refresh';
import CatImageAPI from '../../components/CatImageAPI';

const BackButton = styled(IconButton)({
  position: 'fixed',
  top: 20,
  left: 20,
  zIndex: 1,
  borderRadius: '50%',
  padding: '10px',
});

const RefreshImageButton = styled(IconButton)({
  position: 'fixed',
  top: '50%',  
  left: 20,  
  transform: 'translateY(-50%)', 
  zIndex: 1,
  borderRadius: '50%',
  padding: '10px',
});

const ScrollToTopButton = styled(IconButton)({
  position: 'fixed',
  bottom: 20,
  left: 20,
  zIndex: 1,
  borderRadius: '50%',
  padding: '10px',
});

const ImageContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
});

const Image = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  cursor: 'pointer',
});

const ImageWrapper = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
});

const ImageGeneratorPage: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0); // Ключ для принудительного обновления компонента CatImageAPI

  const handleBackClick = () => {
    window.history.back();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleRefreshImages = () => {
    // Увеличиваем ключ, чтобы принудительно обновить компонент CatImageAPI
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      <BackButton>
        <IconButton
          sx={{ position: 'absolute', top: 80, left: 5, zIndex: 1, color: 'rgba(255, 255, 255, 1)' }}
          aria-label="back"
          onClick={handleBackClick}
        >
          <ArrowBackIcon />
        </IconButton>
      </BackButton>
      <RefreshImageButton onClick={handleRefreshImages}> 
        <RefreshIcon sx={{ fontSize: 30, color: '#ffffff' }} />
      </RefreshImageButton>
      <ScrollToTopButton onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon sx={{ fontSize: 30, color: '#ffffff' }} />
      </ScrollToTopButton>
      <h1>Ты стал кошатником</h1>
      <CatImageAPI key={refreshKey} limit={100} onClick={handleImageClick}>
        {(imageUrls: string[]) => (
          <ImageContainer>
            {imageUrls.map((url, index) => (
              <ImageWrapper key={index}>
                <Image src={url} alt={`Cat ${index + 1}`} onClick={() => handleImageClick(url)} />
              </ImageWrapper>
            ))}
          </ImageContainer>
        )}
      </CatImageAPI>
    </div>
  );
};

export default ImageGeneratorPage;
