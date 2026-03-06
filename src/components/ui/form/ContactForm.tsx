import styles from './style.module.scss'

export const ContactForm = () => {
	return (
		<form className={styles.form}>
			<label
				htmlFor="name"
				className={styles.label}
			>
				<span>Hello my name is:</span>
				<input
					type="text"
					name="name"
					placeholder="Name"
				/>
			</label>
			<label
				htmlFor="email"
				className={styles.label}
			>
				<span>Here is my email:</span>
				<input
					type="email"
					name="email"
					placeholder="Email"
				/>
			</label>
			<label
				htmlFor="service"
				className={`${styles.label} md:col-span-2`}
			>
				<span>Tell us what service you want?</span>
				<select name="service">
					<option value="0">Select service type</option>
				</select>
			</label>
			<label
				htmlFor="note"
				className={`${styles.label} md:col-span-2`}
			>
				<span>What else do you want?</span>
				<textarea
					name="note"
					placeholder="Extra notes"
				></textarea>
			</label>
			<button className={`${styles.send_button} md:col-span-2`}>Send</button>
		</form>
	)
}
