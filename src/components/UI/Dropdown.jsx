import { useState } from "react";
import PropTypes from "prop-types";
import { searchFilter } from "../../utils/common";

const Dropdown = ({ options, labelText, searchBy, className, dropRef }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLabelTop, setIsLabelTop] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

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

  const waitBlur = () => {
    setTimeout(onBlur, 150);
  };

  const handleClick = (item) => {
    setSearchValue(item[searchBy].name);
    setSelectedItem(item);
  };

  return (
    <div className={`dropdown ${className}`}>
      <div className="dropdown__wrapper">
        {labelText?.length > 0 && (
          <label className={isLabelTop ? "label-top" : undefined}>
            {labelText}
          </label>
        )}
        <input
          type="text"
          value={searchValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={waitBlur}
        />
      </div>
      {isMenuVisible && (
        <div className="dropdown__menu">
          <ul>
            {searchFilter({
              searchValue,
              list: options,
              searchBy,
            })?.map((item, index) => (
              <li key={index} onClick={() => handleClick(item)}>
                {item[searchBy].name}
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
  labelText: PropTypes.string,
  searchBy: PropTypes.string,
  className: PropTypes.string,
};

export default Dropdown;
