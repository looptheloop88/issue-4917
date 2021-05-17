import express from 'express';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/firestore'

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const config = {
    // ...
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.useEmulator("localhost", 8080);
firestore.settings({ experimentalForceLongPolling: true });

const data = {
    username: 'looptheloop88'
};
firestore.collection("users").add(data);

const server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})