/**
 * TODO: display view to 'student' if 'state' is 'ready'
 */

import React from 'react';
import FirebaseContext from './../../firebase/context';


import Active from './active';
import Ready from './ready';
import Idle from './idle';
import Inactive from './inactive';
import Complete from './complete';
import Analysis from './analysis';

const Controller = () => {

    const { firebase } = React.useContext(FirebaseContext);
    const [quizData, setQuizData] = React.useState(null);

    React.useEffect(() => {
        if (!quizData) {
            getQuiz();
        }
    });

    const getQuiz = () => {
        firebase.db
            .collection('quiz')
            .doc('q13suewdBSErhnwLEPpN')
            .onSnapshot(handleSnapshot);
    }

    const handleSnapshot = (snapshot) => {
        const snapshotData = snapshot.data();
        console.log(snapshotData);
        setQuizData(snapshotData);
    }

    const VIEWS = {
        "inactive" : <Inactive />,
        "idle"     : <Idle />,
        "ready"    : <Ready />,
        "active"   : <Active question={quizData && quizData.questions[quizData.questionIndex]} />,
        "analysis" : <Analysis question={quizData && quizData.questions[quizData.questionIndex]} />,
        "complete" : <Complete />
    }

    return ( quizData &&
        <div>{VIEWS[quizData.state] ? VIEWS[quizData.state] : "no"}</div>
    );
}

export default Controller;