
import PropTypes from 'prop-types';

function BookCard({ title, author, rating, cover }) {
  return (
    <div className="book-card" style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", margin: "10px", width: "200px" }}>
      <img src={cover} alt={title} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Rating: ⭐ {rating}</p>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};

export default BookCard;