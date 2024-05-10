import React from 'react';
import '../App.css';

const BookCard = (userBooks) => {
  console.log(userBooks.userBooks, "kjfnvksj")
  return (
    <div className="card-grid">
      {userBooks.userBooks.map((card, index) => (
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
