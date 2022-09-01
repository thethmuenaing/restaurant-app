// Saving the new Item

import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
	await setDoc(doc(firestore, "footItem", `${Date.now()}`), data, {
		merge: true,
	});
};
