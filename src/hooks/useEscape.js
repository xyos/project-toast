import { useCallback, useEffect } from "react";

export const useEscape = (callback) => {
	const handleEscape = useCallback(
		(event) => {
			if (event.keyCode === 27) {
				callback();
			}
		},
		[callback],
	);
	useEffect(() => {
		document.addEventListener("keydown", handleEscape, false);
		return () => {
			document.removeEventListener("keydown", handleEscape, false);
		};
	}, [handleEscape]);
};
