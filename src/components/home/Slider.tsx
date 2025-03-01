import React from 'react';
import styles from '@/components/style/Slider.module.scss';

const Slider: React.FC = () => {
  const images = [
    { src: 'https://ik.imagekit.io/5mjwfcn7d/SacredReach%20Brand%20logo/Samsung.png?updatedAt=1725128706603', alt: 'samsung' },
    { src: 'https://ik.imagekit.io/5mjwfcn7d/SacredReach%20Brand%20logo/boat.png?updatedAt=1725128711089', alt: 'boat' },
    { src: 'https://ik.imagekit.io/5mjwfcn7d/SacredReach%20Brand%20logo/Disney+%20Hotstar.png?updatedAt=1725128715600', alt: 'Hotstar' },
    { src: 'https://ik.imagekit.io/5mjwfcn7d/SacredReach%20Brand%20logo/Audi.png?updatedAt=1725130162165', alt: 'Audi' },
    { src: 'https://ik.imagekit.io/5mjwfcn7d/SacredReach%20Brand%20logo/Royal%20Enfield.png?updatedAt=1725128706749', alt: 'RoyalEnfield' },
    { src: 'https://ik.imagekit.io/5mjwfcn7d/SacredReach%20Brand%20logo/Puma1_.png?updatedAt=1725130848205', alt: 'Puma' },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {images.concat(images).map((image, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
