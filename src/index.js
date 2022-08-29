// import React from "react";
// import ReactDOM from "react";
// import "./index.css";

// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider>
		</Router>
	</React.StrictMode>
);
