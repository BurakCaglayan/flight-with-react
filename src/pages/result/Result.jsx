import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/Header";

const Result = () => {
  const navigate = useNavigate();
  const finalPrice = JSON.parse(localStorage.getItem("finalPrice"));
  const { count } = JSON.parse(localStorage.getItem("passengersSelections"));
  const errorStatus = localStorage.getItem("errorStatus");

  return (
    <div className="result">
      <Header className={"header__dark"} />
      <div className="result__container">
        {errorStatus !== "error" ? (
          <>
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
          </>
        ) : (
          <>
            <div className="result__body">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="result__body__error-icon"
              />
              <div>Kabin seçiminiz tamamlanamadı.</div>
            </div>
            <hr />
            <div className="result__footer-error">
              <button
                onClick={() => navigate("/")}
                className="result__footer-error__button"
              >
                Başa Dön
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
