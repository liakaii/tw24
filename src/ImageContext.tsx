// ImageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ImageContextProps {
  savedImages: string[];
    addImage: (url: string) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [savedImages, setSavedImages] = useState<string[]>([]);

  const addImage = (url: string) => {
    setSavedImages(prevImages => [...prevImages, url]);
  };

  return (
    <ImageContext.Provider value={{ savedImages, addImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImage must be used within an ImageProvider');
  }
  return context;
};
