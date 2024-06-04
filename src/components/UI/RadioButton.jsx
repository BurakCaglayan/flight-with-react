import PropTypes from "prop-types";

const RadioButton = ({
  className,
  value,
  name,
  checked,
  label,
  onChangeValue,
  item,
}) => (
  <div className={className}>
    <input
      type="radio"
      value={value}
      name={name}
      checked={checked}
      onChange={(e) => onChangeValue(e, item)}
    />
    {label}
  </div>
);

RadioButton.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChangeValue: PropTypes.func,
};

export default RadioButton;
