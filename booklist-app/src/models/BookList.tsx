// src/components/BookList.tsx
import React from 'react';
import Book from './Book';
import { IBook } from './book.props';

interface BookListProps {
  books: IBook[];
  onRemove: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onRemove }) => {
  return (
    <div>
      {books.map(book => (
        <Book key={book.id} book={book} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default BookList;
