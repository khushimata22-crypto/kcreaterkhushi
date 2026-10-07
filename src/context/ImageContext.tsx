import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ImageAssets {
  kCreatorLogo: string;
  heroPromo: string;
  aiCreatorLogo: string;
  khushiPortrait: string;
}

const DEFAULT_IMAGES: ImageAssets = {
  kCreatorLogo: '/images/k-creator-logo.jpg',
  heroPromo: '/images/ai-creator-khushi-promo.svg',
  aiCreatorLogo: '/images/ai-creator-khushi-logo.svg',
  khushiPortrait: '/images/khushi-mata-portrait.svg',
};

interface ImageContextType {
  images: ImageAssets;
  updateImage: (key: keyof ImageAssets, dataUrl: string) => void;
  resetImages: () => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ImageAssets>(() => {
    try {
      const stored = localStorage.getItem('k_creator_images_v5');
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_IMAGES, ...parsed };
      }
    } catch (e) {
      console.error('Error loading stored images', e);
    }
    return DEFAULT_IMAGES;
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('k_creator_images_v5', JSON.stringify(images));
      localStorage.setItem('k_creator_images', JSON.stringify(images));
    } catch (e) {
      console.error('Error saving stored images', e);
    }
  }, [images]);

  const updateImage = (key: keyof ImageAssets, dataUrl: string) => {
    setImages((prev) => ({
      ...prev,
      [key]: dataUrl,
    }));
  };

  const resetImages = () => {
    setImages(DEFAULT_IMAGES);
    try {
      localStorage.removeItem('k_creator_images');
    } catch (e) {
      console.error('Error resetting images', e);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        updateImage,
        resetImages,
        isManagerOpen,
        setIsManagerOpen,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useBrandImages = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useBrandImages must be used within an ImageProvider');
  }
  return context;
};
