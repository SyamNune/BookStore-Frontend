import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200">
      <div className="h-48 overflow-hidden">
        <img 
          src={book.imageUrl} 
          alt={book.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
           <span className="text-xs font-bold uppercase text-blue-600 bg-blue-100 py-1 px-2 rounded">
             {book.category}
           </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {book.description}
        </p>
        <Link 
          to={book.link} 
          className="block w-full text-center bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;