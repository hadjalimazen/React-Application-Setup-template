import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function App({ counter, increment, decrement }) {

  const { t, i18n: { language, changeLanguage } } = useTranslation();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-4xl font-bold">{counter}</div>
      <div className="flex flex-col ml-5">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={increment}>{ t('inc') }</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded mt-2" onClick={decrement}>{ t('dec') }</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={() => changeLanguage(language === "en" ? "fr" : "en")}>{t('a')}</button>
      </div>
    </div>
  );
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    counter: state.counterState.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);