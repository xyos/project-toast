import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import { ToastsContext } from "../Toast";

import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [variant, setVariant] = React.useState("notice");
	const [message, setMessage] = React.useState("");
	const { addToast } = React.useContext(ToastsContext);
	const submit = (e) => {
		e.preventDefault();
		addToast({ message, variant });
		setMessage("");
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<form className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							id="message"
							className={styles.messageInput}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => (
							<label htmlFor="variant-notice">
								<input
									key={option}
									id="variant-notice"
									type="radio"
									name="variant"
									value={option}
									checked={variant === option}
									onChange={(e) => setVariant(e.target.value)}
								/>
								{option}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button type="submit" onClick={submit}>
							Pop Toast!
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
