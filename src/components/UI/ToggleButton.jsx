import { useState } from "react";

const ToggleButton = ({ setIsToggle }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    setIsToggle(!checked);
  };

  return (
    <div className="toggle-slider">
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="slider" />
    </div>
  );
};

export default ToggleButton;
