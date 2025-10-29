import { useEffect } from 'react';

const ImageDebugger: React.FC = () => {
  useEffect(() => {
    console.log('Image Debugger Started');
    
    const images = [
      '/logo.png',
      '/certifications/hikvision.png', 
      '/certifications/centurion.png',
      '/certifications/gemini.png'
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(` ${src} loaded successfully`);
      img.onerror = () => console.error(`${src} failed to load`);
    });
  }, []);

  return null;
};

export default ImageDebugger;
