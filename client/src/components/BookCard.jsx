import React from 'react';
import '../App.css';
import { personalBookData } from '../FetchData';

const BookCard = () => {
  return (
    <div className="card-grid">
      {personalBookData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
