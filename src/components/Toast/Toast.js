import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

const HIDDEN_MESSAGE_BY_VARIANT = {
	notice: "Informational message",
	warning: "Warning message",
	success: "Success message",
	error: "Error message",
};

function Toast({ variant = "notice", closeToast, children }) {
	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				{React.createElement(ICONS_BY_VARIANT[variant], { size: 24 })}
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{HIDDEN_MESSAGE_BY_VARIANT[variant]} - </VisuallyHidden>
				{children}
			</p>
			<button
				aria-label="Dismiss message"
				aria-live="off"
				type="button"
				className={styles.closeButton}
				onClick={closeToast}
			>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
