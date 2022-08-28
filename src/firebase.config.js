import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD5RYfYmagl-VQlMFcpuuE2rYyeBw1hwxw",
	authDomain: "restaurantapp-5a085.firebaseapp.com",
	databaseURL: "https://restaurantapp-5a085-default-rtdb.firebaseio.com",
	projectId: "restaurantapp-5a085",
	storageBucket: "restaurantapp-5a085.appspot.com",
	messagingSenderId: "925927523754",
	appId: "1:925927523754:web:9170a9b742832138de17d3",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
