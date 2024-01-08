import React from "react";

import Toast, { ToastsContext } from "../Toast";
import styles from "./ToastShelf.module.css";
import { useEscape } from "../../hooks";

function ToastShelf() {
	const { toasts, removeToast, dismissAll } = React.useContext(ToastsContext);
	useEscape(() => {
		if (toasts.length) {
			dismissAll();
		}
	});
	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notifications"
		>
			{toasts.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast
						closeToast={() => removeToast(toast.id)}
						variant={toast.variant}
					>
						{toast.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
