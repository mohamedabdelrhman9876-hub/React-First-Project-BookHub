 import PropTypes from 'prop-types';
import Button from './Button';

export default function BookCard({ book, onViewDetails }) {
  return (
    <div className="book-card">
      <div className="book-image-container">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <span className="book-category-tag">{book.category}</span>
        <div className="book-rating">⭐ {book.rating} ({book.reviewsCount} reviews)</div>
        <Button label="View Details" onClick={() => onViewDetails(book)} className="view-details-btn" />
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    reviewsCount: PropTypes.number.isRequired
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired
};