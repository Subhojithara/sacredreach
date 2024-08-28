import React from 'react';
import Image from 'next/image';
import styles from '@/components/style/Slider.module.scss';

const Slider: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {Array.from({ length: 14 }).map((_, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
              alt={`slide-${index}`}
              width={500} // adjust width as needed
              height={300} // adjust height as needed
              layout="responsive" // ensures responsive behavior
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
