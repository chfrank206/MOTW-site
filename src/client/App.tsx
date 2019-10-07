import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';

export interface IAppProps { }

const App: React.SFC<IAppProps> = () => {

    
    

    
        return (
            <Router>
                <Switch>
                    {/* <Sidebar /> */}
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        );
    
}





export default App;