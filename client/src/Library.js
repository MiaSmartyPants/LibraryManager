import React from 'react';
import BookCard from './components/BookCard';

export default function Library(libraryData) {
    
      console.log(libraryData.LibraryData.userBooks)

  return (
    <div>
      <h1>My Book Collection</h1>
      {/* <BookGrid bookData={bookData} /> */}
      <BookCard LibraryBooks = {libraryData.LibraryData.userBooks}/>
    </div>
  );
}
