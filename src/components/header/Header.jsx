import PropTypes from "prop-types";

const Header = ({ className }) => {
  return (
    <div className={`header ${className}`}>
      <div>
        <b>turkishairlines.com</b>
      </div>
      <div>
        <small>search</small>
        <span>Flight Challange</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
