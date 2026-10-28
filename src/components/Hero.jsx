import PropTypes from 'prop-types';
import Button from "./Button";

function Hero({ title, subtitle, actionLabel, onAction }) {
  return (
    <section style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "#f8f9fa", marginBottom: "20px" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "10px" }}>{title}</h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>{subtitle}</p>
      <Button label={actionLabel} onClick={onAction} />
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
  onAction: PropTypes.func,
};

export default Hero;