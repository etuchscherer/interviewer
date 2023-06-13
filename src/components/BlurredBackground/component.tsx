import React from 'react';
import './styles.css';

interface Props {
  imageUrl: string;
}

const BlurredBackground = ({ imageUrl }: Props) => {
  return (
    <div className="container">
      <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="overlay" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    </div>
  );
};

export default BlurredBackground;