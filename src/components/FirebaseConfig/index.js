import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCNcI2U0CoO7flfmDSrZTqFrb0YQKa6hlQ",
        authDomain: "my-app-a50eb.firebaseapp.com",
        projectId: "my-app-a50eb",
        storageBucket: "my-app-a50eb.appspot.com",
        messagingSenderId: "451609431390",
        appId: "1:451609431390:web:7def42a1767d93a3ac13cf"
    };

    const app = initializeApp(firebaseConfig);

    return getDatabase(app);

}

export default StartFirebase;