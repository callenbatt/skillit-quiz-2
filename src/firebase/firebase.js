import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// define

import firebaseConfig from './config';

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }
}

const firebase = new Firebase()
export default firebase;