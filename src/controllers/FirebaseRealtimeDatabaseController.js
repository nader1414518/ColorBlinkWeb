import app from "@/config/firebase.config";
import { getDatabase, onValue, ref, set } from "firebase/database";

const db = getDatabase(app);

class FirebaseRealtimeDatabaseController {

    async changeColor(color) {
        const data = {
            color,
        };
        return await set(ref(db, "CurrentColor"), data);
    }

    async listenToColor(callback) {
        onValue(ref(db, "CurrentColor"), (snapshot) => {
            callback(snapshot);
        });
    }

};

export default new FirebaseRealtimeDatabaseController;