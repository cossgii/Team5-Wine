import React from 'react';
import './Card';
import { CardProps } from '@/types/Card';

const Card: React.FC<CardProps> = ({ size, image, wineName, wineDesc, winePrice }) => {
  return (
    <div className="hiddencard" data-size={size}>
      <div className="card" data-size={size}>
        <img src={image !== null ? image : ''} alt="Card Image" className="cardImage" data-size={size} />
        <div className="wine">
          <div className="wineName" data-size={size}>
            {wineName}
          </div>
          <div className="wineDesc" data-size={size}>
            {wineDesc}
          </div>
          <p className="winePrice" data-size={size}>
            {winePrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
