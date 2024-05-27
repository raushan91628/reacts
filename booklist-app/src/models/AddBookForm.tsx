// src/components/AddBookForm.tsx
import React, { useState } from 'react';
import { IBook } from '../models/book.props';

interface AddBookFormProps {
  onAdd: (book: Omit<IBook, 'id'>) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    image:'',
    title: '',
    subtitle: '',
    author: '',
    published: '',
    publisher: '',
    pages: 0,
    description: '',
    website: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'pages' ? Number(value) : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      image:'',
      title: '',
      subtitle: '',
      author: '',
      published: '',
      publisher: '',
      pages: 0,
      description: '',
      website: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className='inputfield'>
      <label>Image link:-</label>
       <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />
      <label>Title:-</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <label>Subtitle:-</label>
      <input
        type="text"
        name="subtitle"
        placeholder="Subtitle"
        value={formData.subtitle}
        onChange={handleChange}
      />
      <label>Author:-</label>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <label>Published Date:-</label>
      <input
        type="date"
        name="published"
        placeholder="Published Date"
        value={formData.published}
        onChange={handleChange}
        required
      />
      <label>Publisher:-</label>
      <input
        type="text"
        name="publisher"
        placeholder="Publisher"
        value={formData.publisher}
        onChange={handleChange}
        required
      />
      <label>Page:-</label>
      <input
        type="number"
        name="pages"
        placeholder="Pages"
        value={formData.pages}
        onChange={handleChange}
        required
      />
      <label> Description</label>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label>Website URL:-</label>
      <input
        type="url"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
