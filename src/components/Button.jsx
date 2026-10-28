 import PropTypes from 'prop-types';

function Button({ label, onClick, variant = "primary" }) {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: "8px 16px",
        backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default Button;