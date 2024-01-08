import React from "react";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";
import ToastsProvider from "../Toast/ToastsProvider";

function App() {
	return (
		<ToastsProvider>
			<ToastPlayground />
			<Footer />
		</ToastsProvider>
	);
}

export default App;
