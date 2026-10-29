 import PropTypes from 'prop-types';
import Button from './Button';

export default function Hero({ title, subtitle, actionLabel, onAction }) {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <span className="welcome-tag">Welcome to BookHub</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button label={actionLabel} onClick={onAction} className="browse-btn" />
      </div>
      <div className="hero-graphic">
        <div className="stack-illustration">📚🌱</div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired
};