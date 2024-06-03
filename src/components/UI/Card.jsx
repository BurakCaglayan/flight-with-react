import PropTypes from "prop-types";

const card = ({ className, children }) => (
  <div className={`card ${className}`}>{children}</div>
);

card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default card;
