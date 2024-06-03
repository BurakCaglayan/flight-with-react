import PropTypes from "prop-types";

const card = ({ className }) => <div className={`card ${className}`}>Card</div>;

card.propTypes = {
  className: PropTypes.string,
};

export default card;
