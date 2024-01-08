import React from "react";

import Toast, { ToastsContext } from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
	const { toasts, removeToast } = React.useContext(ToastsContext);
	return (
		<ol className={styles.wrapper}>
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
