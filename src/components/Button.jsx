 import PropTypes from 'prop-types';

export default function Button({ label, onClick, className }) {
  return (
    <button className={`custom-btn ${className || ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};