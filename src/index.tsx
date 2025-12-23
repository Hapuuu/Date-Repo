import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Next from "./pages/Next";
import { RecoilRoot } from "recoil";
import DateConfigurer from "./components/DateConfigurer";

ReactDOM.render(
  <Router>
    <Switch>
      <RecoilRoot>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/next" component={Next} />
        <Route path="/schedule-date" component={DateConfigurer} />
      </RecoilRoot>
    </Switch>
  </Router>,
  document.getElementById("root")
);
