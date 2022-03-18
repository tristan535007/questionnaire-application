import './App.css';
import { Layout } from './components';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { Home, Quiz } from './pages';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <Redirect to="/home" />}
                    />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/quiz" component={Quiz} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
