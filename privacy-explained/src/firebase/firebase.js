import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import configKeys from "../config/configKeys";

const firebaseConfig = {
  apiKey: configKeys.apiKey,
  authDomain: configKeys.authDomain,
  projectId: configKeys.projectId,
  storageBucket: configKeys.storageBucket,
  messagingSenderId: configKeys.messagingSenderId,
  appId: configKeys.appId,
  measurementId: configKeys.measurementId,
};

//Initialize Firebase

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
export { auth };
