import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase, { FirebaseContext } from './firebase';

import giver_controller from './views/giver/controller';


function App() {
    return (
        <BrowserRouter>
            <FirebaseContext.Provider value={{ firebase}}>
                <Switch>
                    <Route exact path="/" component={giver_controller} />
                </Switch>
            </FirebaseContext.Provider>
        </BrowserRouter>
    );
}

export default App;
