/**
 * TODO: display view to 'student' if 'state' is 'active'
 */

import React from 'react';
import './style.css';

const Active = ({ question }) => {

    return (
        <div>{question.text}</div>
    );
}

export default Active;