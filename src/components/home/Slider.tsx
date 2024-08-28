import React from 'react';
import styles from '@/components/style/Slider.module.scss';

const Slider: React.FC = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {Array.from({ length: 14 }).map((_, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
