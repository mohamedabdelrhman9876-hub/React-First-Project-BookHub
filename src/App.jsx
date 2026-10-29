 import { useState } from 'react';
import './App.css';
import { booksData } from './data/books';
import Hero from './components/Hero';
import BookCard from './components/BookCard';

function App() {
  const [books] = useState(booksData);
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bookhub-app">
      <header className="navbar">
        <div className="nav-brand" onClick={() => { setActiveTab('Home'); setSelectedBook(null); }}>
          <span className="book-icon">📖</span>
          <span className="brand-title">BookHub</span>
        </div>

        <nav className="nav-links">
          <button className={activeTab === 'Home' && !selectedBook ? 'active' : ''} onClick={() => { setActiveTab('Home'); setSelectedBook(null); }}>Home</button>
          <button className={activeTab === 'Categories' ? 'active' : ''} onClick={() => { setActiveTab('Categories'); setSelectedBook(null); }}>Categories</button>
          <button className={activeTab === 'About' ? 'active' : ''} onClick={() => { setActiveTab('About'); setSelectedBook(null); }}>About</button>
        </nav>

        <div className="nav-actions">
          <div className="search-box">
            <span>🔍</span>
            <input type="text" placeholder="Search books..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </header>

      {selectedBook ? (
        <main className="book-details-view">
          <button className="back-link" onClick={() => setSelectedBook(null)}>← Back to books</button>
          <div className="details-container">
            <div className="details-cover"><img src={selectedBook.cover} alt={selectedBook.title} /></div>
            <div className="details-info">
              <h1>{selectedBook.title}</h1>
              <p className="details-author">{selectedBook.author}</p>
              <span className="category-badge">{selectedBook.category}</span>
              <p className="details-description">{selectedBook.description}</p>
            </div>
          </div>
        </main>
      ) : activeTab === 'Categories' ? (
        <div className="categories-layout">
          <aside className="sidebar">
            <h3>Categories</h3>
            <ul>
              {['All', 'Programming', 'Self Help', 'Science Fiction', 'Fantasy', 'Productivity'].map(cat => (
                <li key={cat} className={selectedCategory === cat ? 'active-sidebar' : ''} onClick={() => setSelectedCategory(cat)}>{cat}</li>
              ))}
            </ul>
          </aside>
          <main className="categories-content">
            <h2>{selectedCategory} Books</h2>
            <div className="books-grid">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} onViewDetails={(b) => setSelectedBook(b)} />
              ))}
            </div>
          </main>
        </div>
      ) : activeTab === 'About' ? (
        <main className="about-view" style={{padding: '2rem'}}>
          <h2>About BookHub</h2>
          <p>A modern book discovery web application built with React.</p>
        </main>
      ) : (
        <main className="home-view">
          <Hero 
            title="Discover Great Books" 
            subtitle="Read. Learn. Grow." 
            actionLabel="Browse Books" 
            onAction={() => setActiveTab('Categories')} 
          />
          <section className="featured-section">
            <h2>Featured Books</h2>
            <div className="books-grid">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} onViewDetails={(b) => setSelectedBook(b)} />
              ))}
            </div>
          </section>
        </main>
      )}

      <footer className="footer">
        <p>© 2026 BookHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;