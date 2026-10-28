import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookCard from './components/BookCard';
import { books } from './data/books';
import './App.css';

function App() {
  const handleBrowseClick = () => {
    alert("Exploring the BookHub library!");
  };

  return (
    <div className="app-container" style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* 1. Navbar Component */}
      <Navbar />

      {/* 2. Hero Component with Props */}
      <Hero 
        title="Welcome to BookHub" 
        subtitle="Discover your next favorite book from our curated collection." 
        actionLabel="Browse Books" 
        onAction={handleBrowseClick} 
      />

      {/* 3. Book List Section rendered using .map() */}
      <main style={{ padding: "20px 40px" }}>
        <h2 style={{ borderBottom: "2px solid #ddd", paddingBottom: "10px", marginBottom: "20px" }}>Featured Books</h2>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {books.map((book) => (
            <BookCard 
              key={book.id} 
              title={book.title} 
              author={book.author} 
              rating={book.rating} 
              cover={book.cover} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;