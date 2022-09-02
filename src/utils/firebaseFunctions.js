// Saving the new Item

import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
	await setDoc(doc(firestore, "footItem", `${Date.now()}`), data, {
		merge: true,
	});
};

// getAll footItem
export const getAllFoodItems = async () => {
	const items = await getDocs(
		query(collection(firestore, "footItem"), orderBy("id", "desc"))
	);

	return items.docs.map((doc) => doc.data());
};
