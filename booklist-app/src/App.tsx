// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { IBook } from './models/book.props';
import BookList from './models/BookList';
import AddBookForm from './models/AddBookForm';
import {bookData} from './models/data/bookData';

const LOCAL_STORAGE_KEY = 'inputfield';

const App: React.FC = () => {
  const [userBooks, setUserBooks] = useState<IBook[]>([]);

  // Load books from local storage
  useEffect(() => {
    const storedUserBooks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUserBooks) {
      setUserBooks(JSON.parse(storedUserBooks));
    }
  }, []);

  // Save user books to local storage whenever the userBooks state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userBooks));
  }, [userBooks]);

  const handleAddBook = (book: Omit<IBook, 'id'>) => {
    const newBook: IBook = { ...book, id: `user-${Date.now()}` };
    setUserBooks([...userBooks, newBook]);
  };

  const handleRemoveBook = (id: string) => {
    setUserBooks(userBooks.filter(book => book.id !== id));
  };

  // Merge initial books and user-added books for display
  const allBooks = [...bookData, ...userBooks];

  return (
    <div>
      <h1>Book List</h1>
      <AddBookForm onAdd={handleAddBook} />
      <BookList books={allBooks} onRemove={handleRemoveBook} />
    </div>
  );
};

export default App;