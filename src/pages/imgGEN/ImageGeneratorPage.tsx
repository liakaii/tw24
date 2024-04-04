import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackButton = styled(IconButton)({
  position: 'fixed',
  top: 20,
  left: 20,
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
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const fetchAllImages = async () => {
    let allImages: string[] = [];
    let currentPage = 1;
    const limit = 100;

    while (allImages.length < limit) {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${currentPage}`);
        const data = await response.json();
        const urls = data.map((item: any) => item.url);
        
        if (urls.length === 0) break;

        allImages = [...allImages, ...urls];
        currentPage++;
      } catch (error) {
        console.error('Error fetching images:', error);
        break;
      }
    }

    setImageUrls(allImages.slice(0, limit));
  };

  useEffect(() => {
    fetchAllImages();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <BackButton onClick={handleGoBack}>
        <ArrowBackIcon sx={{ fontSize: 30, color: '#ffffff' }} />
      </BackButton>
      <ScrollToTopButton onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon sx={{ fontSize: 30, color: '#ffffff' }} />
      </ScrollToTopButton>
      <h1>Ты стал кошатником</h1>
      <ImageContainer>
        {imageUrls.map((url, index) => (
          <ImageWrapper key={index}>
            <Image src={url} alt={`Cat ${index + 1}`} onClick={() => handleImageClick(url)} />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </div>
  );
};

export default ImageGeneratorPage;
