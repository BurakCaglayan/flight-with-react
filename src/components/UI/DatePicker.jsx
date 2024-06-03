import PropTypes from "prop-types";

const DatePicker = ({ className }) => (
  <div className={`date-picker ${className}`}>Tarih</div>
);

DatePicker.propTypes = {
  className: PropTypes.string,
};

export default DatePicker;
