import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
function App() {
  return (
    <Router>
      <div>
        {/*navbar is rendered on all pages */}
        <div className="navbar">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
        </div>
        
        <Switch>
          <Route path="/" component={HomePage} exact>
          </Route>
          <Route path="/about" component={AboutPage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
