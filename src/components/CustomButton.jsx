// eslint-disable-next-line react/prop-types
import "./customButton.css";
const CustomButton = ({ text, warnMessage, hint }) => {
  return (
    <div>
      <button className={`${warnMessage ? "warn" : ""} ${hint ? "show" : ""}`}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
