import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "../../../components/UI/RadioButton";
import { getFlyPrice } from "../../../utils/common";

const FlightClassSelect = ({
  value,
  name,
  label,
  checked,
  onChangeRadioValue,
  item,
}) => {
  const { amount, currency } = getFlyPrice(item, value);
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
            item={item}
          />
        </div>
        <div>
          <div>Yolcu başına</div>
          <div>{`${currency} ${amount}`}</div>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
};

export default FlightClassSelect;
