import React from "react";

export const ToastsContext = React.createContext();

function ToastsProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const addToast = React.useCallback(
		({ message, variant }) => {
			const toast = {
				id: crypto.randomUUID(),
				message,
				variant,
			};
			setToasts((prevToasts) => [...prevToasts, toast]);
		},
		[setToasts],
	);

	const removeToast = React.useCallback(
		(id) => {
			setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
		},
		[setToasts],
	);

	const dismissAll = React.useCallback(() => {
		setToasts([]);
	}, [setToasts]);

	const contextValue = {
		toasts,
		addToast,
		dismissAll,
		removeToast,
	};

	return (
		<ToastsContext.Provider value={contextValue}>
			{children}
		</ToastsContext.Provider>
	);
}

export default ToastsProvider;
