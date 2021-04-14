import TeamPairing from './components/TeamPairing/TeamPairing';
import Survey from './components/TeamPairing/Survey/Survey';
import Resources from './components/Resources/Resources';
import { BrowserRouter as Router } from "react-router-dom";
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
const App = () => {
    return(
        <div>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/" exact component={() => <Projects />} />
                    <Route path="/projects" exact component={() => <Projects />} />
                    <Route path="/teampairing" exact component={() => <TeamPairing />} />
                    <Route path="/teampairing/survey" exact component={() => <Survey />} />
                    <Route path="/resources" exact component={() => <Resources />} />
                </Switch>
            </Router>
        </div>

    )
}
export default App;