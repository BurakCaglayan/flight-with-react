import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "../../UI/RadioButton";

const FlightClassSelect = ({
  value,
  name,
  label,
  checked,
  onChangeRadioValue,
}) => {

  return (
    <div className="flight-class">
      <div className="flight-class__info">
        <div>
          <RadioButton
            value={value}
            name={name}
            checked={checked}
            onChangeValue={onChangeRadioValue}
            label={label}
          />
        </div>
        <div>
          <div>Yolcu başına</div>
          <div>TRY 200</div>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
};

export default FlightClassSelect;
