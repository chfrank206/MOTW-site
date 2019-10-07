import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';

export interface IAppProps { }

const App: React.SFC<IAppProps> = () => {

    
    

    
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        );
    
}





export default App;