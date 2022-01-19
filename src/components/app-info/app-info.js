import "./app-info.css";

const AppInfo = ({onCountItems, onCountIncreased}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании "No negative"</h1>
      <h2>Общее число сотрудников: {onCountItems}</h2>
      <h2>Премию получат: {onCountIncreased}</h2>
    </div>
  );
};

export default AppInfo;
