// src/components/Book.tsx
import React from 'react';
import { IBook } from '../models/book.props';
import'../App.css';

interface BookProps {
  book: IBook;
  onRemove: (id: string) => void;
}

const Book: React.FC<BookProps> = ({ book, onRemove }) => {
  return (
    <div className='displaysection'>
      {/* <div className='divsection'> */}
      <table>
      <img src={book.image} alt={book.title} style={{width :"370px",height:"400px",border:"10px"}}/>
      <div className='displaytitle'>
      <h3><th>Tiltle:-</th><td>{book.title}</td></h3>
      <p><th>Subtiltle:-</th><td>{book.subtitle}</td></p>
      <p><th>Author:-</th> <td>{book.author}</td></p>
      <p><th>Published:-</th><td> {book.publisher} on {new Date(book.published).toDateString()}</td></p>
      <p><th>Page:</th><td>{book.pages} pages</td></p>
      <p className='discription'><th></th><td>{book.description}</td></p>
      <a className='link' href={book.website} target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
      {/* <button onClick={() => onRemove(book.title)}>Remove</button> */}
      </table>
      {/* </div> */}
    </div>
  );
};

export default Book;
