import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase, { FirebaseContext } from '../firebase';

// import vg_inactive from './views/giver/inactive';
// import vg_idle from './views/giver/idle';
// import vg_ready from './views/giver/ready';
// import vg_active from './views/giver/active';
// import vg_analysis from './views/giver/analysis';
// import vg_complete from './views/giver/complete';

// import vt_inactive from './views/taker/inactive';
// import vt_idle from './views/taker/idle';
// import vt_ready from './views/taker/ready';
// import vt_active from './views/taker/active';
// import vt_analysis from './views/taker/analysis';
// import vt_complete from './views/taker/complete';


function App() {
    return (
        <BrowserRouter>
            <FirebaseContext.Provider value={{ user, firebase}}>
                <Switch>
                </Switch>
            </FirebaseContext.Provider>
        </BrowserRouter>
    );
}

export default App;
