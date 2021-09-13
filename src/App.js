import "./styles.css";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { useEffect } from "react";
import Error from "./Error.js";

export default function App() {
  const history = useHistory();

  useEffect(() => {
    console.log("rendered");
  });
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home Page </Link>
        </li>
        <li>
          <Link to="/about"> About us </Link>
        </li>
        <li>
          <Link to="/contact"> Contact us </Link>
        </li>
      </ul>

      <button onClick={() => history.push("/")}> Home Page </button>
      <button onClick={() => history.push("/about")}> About Us</button>
      <button onClick={() => history.push("/contact")}> Contact Us</button>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          {" "}
          <Error />
        </Route>
      </Switch>
    </div>
  );
}
