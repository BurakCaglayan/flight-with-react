import { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, hasLabel, labelText }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLabelTop, setIsLabelTop] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState({});

  const onChange = (e) => {
    const tempValue = e.target.value;
    setSearchValue(tempValue);
    if (tempValue.length > 0) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  const onFocus = () => {
    setIsLabelTop(true);
    if (searchValue.length > 0 && !isMenuVisible) {
      setIsMenuVisible(true);
    }
  };

  const onBlur = () => {
    if (isLabelTop && !searchValue.length > 0) {
      setIsLabelTop(false);
    }
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        {hasLabel && (
          <label className={isLabelTop && "label-top"}>{labelText}</label>
        )}
        <input
          type="text"
          value={searchValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {isMenuVisible && (
        <div className="dropdown__menu">
          <ul>
            {options?.map((item) => (
              <li key={item.id} onClick={() => handleClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf().isRequired,
  hasLabel: PropTypes.bool,
  labelText: PropTypes.string,
};

export default Dropdown;
