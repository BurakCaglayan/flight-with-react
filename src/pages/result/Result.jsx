import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/Header";

const Result = () => {
  const finalPrice = JSON.parse(localStorage.getItem("finalPrice"));
  const { count } = JSON.parse(localStorage.getItem("passengersSelections"));

  return (
    <div className="result">
      <Header className={"header__dark"} />
      <div className="result__container">
        <div className="result__body">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="result__body__success-icon"
          />
          <div>Kabin seçiminiz tamamlandı</div>
        </div>
        <hr />
        <div className="result__footer">
          <div>Toplam Tutar</div>
          <div className="result__footer__amount">
            <div>{finalPrice.currency}</div>
            <div>{finalPrice.amount * count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
