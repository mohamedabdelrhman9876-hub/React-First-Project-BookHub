import React, { useState } from 'react';
import './App.css';

const initialBooks = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    rating: "4.8",
    reviewsCount: 124,
    pages: 464,
    published: "2008",
    language: "English",
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    image: "https://m.media-amazon.com/images/I/71T7aXT3PdL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    rating: "4.8",
    reviewsCount: 98,
    pages: 320,
    published: "2018",
    language: "English",
    description: "Atomic Habits shows how small changes, repeated consistently, can lead to remarkable results.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 3,
    title: "The Martian",
    author: "Andy Weir",
    category: "Science Fiction",
    rating: "4.7",
    reviewsCount: 156,
    pages: 369,
    published: "2014",
    language: "English",
    description: "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there.",
    image: "https://m.media-amazon.com/images/I/81wxd6WYycL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    category: "Fantasy",
    rating: "4.6",
    reviewsCount: 210,
    pages: 688,
    published: "1965",
    language: "English",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family task with ruling an inhospitable world.",
    image: "https://m.media-amazon.com/images/I/A1u44fEN0JL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 5,
    title: "The 5 AM Club",
    author: "Robin Sharma",
    category: "Productivity",
    rating: "4.5",
    reviewsCount: 87,
    pages: 336,
    published: "2018",
    language: "English",
    description: "Own Your Morning. Elevate Your Life. Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago.",
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 6,
    title: "Design Patterns",
    author: "Erich Gamma",
    category: "Programming",
    rating: "4.7",
    reviewsCount: 112,
    pages: 395,
    published: "1994",
    language: "English",
    description: "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions.",
    image: "https://m.media-amazon.com/images/I/81gtKoapHFL._AC_UF1000,1000_QL80_.jpg"
  }
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [activeTab, setActiveTab] = useState('Home'); // 'Home', 'Categories', 'About'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: 'Programming',
    description: '',
    image: ''
  });

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;

    const createdBook = {
      id: Date.now(),
      ...newBook,
      rating: "5.0",
      reviewsCount: 1,
      pages: 250,
      published: "2026",
      language: "English",
      image: newBook.image || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80"
    };

    setBooks([createdBook, ...books]);
    setIsAddModalOpen(false);
    setNewBook({ title: '', author: '', category: 'Programming', description: '', image: '' });
  };

  return (
    <div className="bookhub-app">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-brand" onClick={() => { setActiveTab('Home'); setSelectedBook(null); }}>
          <span className="book-icon">📖</span>
          <span className="brand-title">BookHub</span>
        </div>

        <nav className="nav-links">
          <button 
            className={activeTab === 'Home' && !selectedBook ? 'active' : ''} 
            onClick={() => { setActiveTab('Home'); setSelectedBook(null); }}
          >
            Home
          </button>
          <button 
            className={activeTab === 'Categories' ? 'active' : ''} 
            onClick={() => { setActiveTab('Categories'); setSelectedBook(null); }}
          >
            Categories
          </button>
          <button 
            className={activeTab === 'About' ? 'active' : ''} 
            onClick={() => { setActiveTab('About'); setSelectedBook(null); }}
          >
            About
          </button>
        </nav>

        <div className="nav-actions">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search books..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="add-book-btn" onClick={() => setIsAddModalOpen(true)}>
            + Add Book
          </button>
        </div>
      </header>

      {/* BODY CONTENT */}
      {selectedBook ? (
        /* BOOK DETAILS VIEW */
        <main className="book-details-view">
          <button className="back-link" onClick={() => setSelectedBook(null)}>
            ← Back to books
          </button>
          <div className="details-container">
            <div className="details-cover">
              <img src={selectedBook.image} alt={selectedBook.title} />
            </div>
            <div className="details-info">
              <h1>{selectedBook.title}</h1>
              <p className="details-author">{selectedBook.author}</p>
              <span className="category-badge">{selectedBook.category}</span>
              
              <div className="rating-box">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="rating-score">{selectedBook.rating}</span>
                <span className="reviews-count">({selectedBook.reviewsCount} reviews)</span>
              </div>

              <p className="details-description">{selectedBook.description}</p>

              <div className="meta-info">
                <div>
                  <span className="meta-icon">📖</span>
                  <div>
                    <label>Pages</label>
                    <p>{selectedBook.pages}</p>
                  </div>
                </div>
                <div>
                  <span className="meta-icon">📅</span>
                  <div>
                    <label>Published</label>
                    <p>{selectedBook.published}</p>
                  </div>
                </div>
                <div>
                  <span className="meta-icon">🌐</span>
                  <div>
                    <label>Language</label>
                    <p>{selectedBook.language}</p>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button className="read-now-btn">📖 Read Now</button>
                <button className="fav-btn">♡ Add to Favorites</button>
              </div>
            </div>
          </div>
        </main>
      ) : activeTab === 'Categories' ? (
        /* CATEGORIES WITH SIDEBAR VIEW */
        <div className="categories-layout">
          <aside className="sidebar">
            <h3>Categories</h3>
            <ul>
              {['All', 'Programming', 'Self Help', 'Science Fiction', 'Fantasy', 'Productivity'].map(cat => (
                <li 
                  key={cat} 
                  className={selectedCategory === cat ? 'active-sidebar' : ''}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'All' && '🌐'}
                  {cat === 'Programming' && '💻'}
                  {cat === 'Self Help' && '⭐'}
                  {cat === 'Science Fiction' && '🚀'}
                  {cat === 'Fantasy' && '🧙'}
                  {cat === 'Productivity' && '📈'}
                  <span>{cat}</span>
                </li>
              ))}
            </ul>
          </aside>

          <main className="categories-content">
            <h2>{selectedCategory} Books</h2>
            <p className="subtitle">Explore our collection of {selectedCategory.toLowerCase()} books.</p>
            
            <div className="books-grid">
              {filteredBooks.map((book) => (
                <div key={book.id} className="book-card">
                  <div className="book-image-container">
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    <span className="book-category-tag">{book.category}</span>
                    <button className="view-details-btn" onClick={() => setSelectedBook(book)}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      ) : activeTab === 'About' ? (
        /* ABOUT PAGE VIEW */
        <main className="about-view">
          <h2>About BookHub</h2>
          <p>BookHub is a modern web application designed for book lovers to discover, organize, and manage their favorite books easily.</p>
        </main>
      ) : (
        /* HOME PAGE VIEW WITH HERO BANNER */
        <main className="home-view">
          <section className="hero-banner">
            <div className="hero-content">
              <span className="welcome-tag">Welcome to BookHub</span>
              <h1>Discover Great Books</h1>
              <p>Read. Learn. Grow.</p>
              <button className="browse-btn" onClick={() => setActiveTab('Categories')}>
                📚 Browse Books
              </button>
            </div>
            <div className="hero-graphic">
              <div className="stack-illustration">📚🌱</div>
            </div>
          </section>

          <section className="featured-section">
            <div className="section-header">
              <h2>Featured Books</h2>
              <select 
                className="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Programming">Programming</option>
                <option value="Self Help">Self Help</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Productivity">Productivity</option>
              </select>
            </div>
            <p className="section-subtitle">Explore our collection of amazing books.</p>

            <div className="books-grid">
              {filteredBooks.map((book) => (
                <div key={book.id} className="book-card">
                  <div className="book-image-container">
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    <span className="book-category-tag">{book.category}</span>
                    <div className="book-rating">⭐ {book.rating} ({book.reviewsCount} reviews)</div>
                    <button className="view-details-btn" onClick={() => setSelectedBook(book)}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* ADD NEW BOOK MODAL */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3>Add New Book</h3>
              <button className="close-btn" onClick={() => setIsAddModalOpen(false)}>✕</button>
            </div>
            <form onSubmit={handleAddBook}>
              <div className="form-group">
                <label>Title</label>
                <input 
                  type="text" 
                  placeholder="Enter book title"
                  value={newBook.title}
                  onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input 
                  type="text" 
                  placeholder="Enter author name"
                  value={newBook.author}
                  onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select 
                  value={newBook.category}
                  onChange={(e) => setNewBook({...newBook, category: e.target.value})}
                >
                  <option value="Programming">Programming</option>
                  <option value="Self Help">Self Help</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Productivity">Productivity</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea 
                  placeholder="Enter book description..."
                  value={newBook.description}
                  onChange={(e) => setNewBook({...newBook, description: e.target.value})}
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group">
                <label>Cover Image URL</label>
                <input 
                  type="text" 
                  placeholder="https://example.com/image.jpg"
                  value={newBook.image}
                  onChange={(e) => setNewBook({...newBook, image: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                <button type="submit" className="submit-btn">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 BookHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;