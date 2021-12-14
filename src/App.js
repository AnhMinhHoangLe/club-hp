import "./styles.css";
import Header from "./Components/header/header.component";
import About from "./Components/about/about.component";
import Events from "./Components/events/events.component";
import Services from "./Components/services/services.component";
import HomePage from "./Components/homepage/homepage.component";
import signUp from "./Components/sign-up/signup.component";

import { Switch, Route } from "react-router-dom";
import signIn from "./Components/sign-in/signin.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>

        <Route exact path="/signin">
          <signIn />
        </Route>
        <Route exact path="/signup">
          <signUp />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
