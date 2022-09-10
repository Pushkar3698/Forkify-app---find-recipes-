import logo from "./logo.svg";
import "./Components/Scss/App.scss";
import MainApp from "./Components/MainApp";
import Provider from "./Components/Provider";

function App() {
  return (
    <div className="main_container">
      <Provider>
        <MainApp />
      </Provider>
    </div>
  );
}

export default App;
