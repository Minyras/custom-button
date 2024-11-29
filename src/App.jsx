import "./App.css";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="app">
      <CustomButton text={"salam"} warnMessage={true} hint={true} />
      <CustomButton text={"sagol"} warnMessage={false} hint={true} />
      <CustomButton text={"necesen"} warnMessage={true} hint={false} />
    </div>
  );
}

export default App;
