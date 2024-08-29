import React from 'react';
import Image from 'next/image';
import styles from '@/components/style/Slider.module.scss';

const Slider: React.FC = () => {
  const images = [
    { src: 'https://i.ibb.co/3CzP5CM/samsung.png', alt: 'samsung' },
    { src: 'https://i.ibb.co/tbpBhGL/amazon.png', alt: 'amazon' },
    { src: 'https://i.ibb.co/stkNCnP/pngwing-com.png', alt: 'pngwing-com' },
    { src: 'https://i.ibb.co/GFQD6Ss/puma.png', alt: 'puma' },
    { src: 'https://i.ibb.co/kQJm5pB/zomzto.png', alt: 'zomzto' },
    { src: 'https://i.ibb.co/tbpBhGL/amazon.png', alt: 'amazon' },
    { src: 'https://i.ibb.co/stkNCnP/pngwing-com.png', alt: 'pngwing-com' },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {images.concat(images).map((image, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={40} 
              height={20} 
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
