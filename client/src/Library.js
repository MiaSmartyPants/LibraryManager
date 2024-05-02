import React from 'react';
import BookCard from './components/BookCard';

export default function Library() {
    const cardData = [
        {
          title: 'Card 1',
          description: 'Description for Card 1',
          image: 'https://via.placeholder.com/250',
        },
        {
          title: 'Card 2',
          description: 'Description for Card 2',
          image: 'https://via.placeholder.com/250',
        },
        {
            title: 'Card 1',
            description: 'Description for Card 1',
            image: 'https://via.placeholder.com/250',
          },
          {
            title: 'Card 2',
            description: 'Description for Card 2',
            image: 'https://via.placeholder.com/250',
          },
          {
            title: 'Card 1',
            description: 'Description for Card 1',
            image: 'https://via.placeholder.com/250',
          },
          {
            title: 'Card 2',
            description: 'Description for Card 2',
            image: 'https://via.placeholder.com/250',
          },
          {
            title: 'Card 1',
            description: 'Description for Card 1',
            image: 'https://via.placeholder.com/250',
          },
          {
            title: 'Card 2',
            description: 'Description for Card 2',
            image: 'https://via.placeholder.com/250',
          },
        // Add more card objects as needed
      ];
      

  return (
    <div>
      <h1>My Book Collection</h1>
      {/* <BookGrid bookData={bookData} /> */}
      <BookCard cardData = {cardData}/>
    </div>
  );
}
