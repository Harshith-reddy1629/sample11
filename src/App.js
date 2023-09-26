// import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
// import SuccessPage from "./SuccessPage";

const App = () => (
  <div className="container">
    {" "}
    <img
      src="https://www.hrkatha.com/wp-content/uploads/2021/10/AdmitKard.png"
      alt="ak logo"
      height="80"
      className="ak-logo"
    />
    <HomePage />
  </div>
);

export default App;
