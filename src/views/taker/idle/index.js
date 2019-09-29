/**
 * TODO: display view to 'student' if 'state' is 'inactive'
 */

import React from 'react';
import { FirebaseContext } from './../../../firebase';
import './style.css';

const Inactive = () => {

    const { user, firebase } = React.useContext(FirebaseContext);

    return (
        this //TODO
    );
}

export default Inactive;