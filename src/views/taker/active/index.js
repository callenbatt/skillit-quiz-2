/**
 * TODO: display view to 'student' if 'state' is 'active'
 */

import React from 'react';
import { FirebaseContext } from '../../../firebase';
import './style.css';

const Active = () => {

    const { user, firebase } = React.useContext(FirebaseContext);

    return (
        <div>Active</div>
    );
}

export default Active;