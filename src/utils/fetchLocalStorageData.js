export const fetchUser = () => {
	const userInfo =
		localStorage.getItem("user") !== "undified"
			? JSON.parse(localStorage.getItem("user"))
			: localStorage.clear();

	return userInfo;
};
