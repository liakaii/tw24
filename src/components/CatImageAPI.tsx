import React, { useEffect, useState } from 'react';

interface CatImage {
  id: string;
  url: string;
}

interface CatImageAPIProps {
  limit: number;
  onClick: (url: string) => void;
  children: (imageUrls: string[]) => React.ReactNode;
}

const CatImageAPI: React.FC<CatImageAPIProps> = ({ limit, children }) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const fetchImages = async () => {
    let allImages: string[] = [];
    let currentPage = 1;

    try {
      while (allImages.length < limit) {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${currentPage}`);
        const data: CatImage[] = await response.json();
        const urls = data.map((item: CatImage) => item.url);

        if (urls.length === 0) break;

        allImages = [...allImages, ...urls];
        currentPage++;
      }

      setImageUrls(allImages.slice(0, limit));
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [limit]);

  return <>{children(imageUrls)}</>;
};

export default CatImageAPI;
