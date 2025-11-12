export default function Footer() {
	const year: number = new Date().getFullYear();

	return (
		<footer className="place-self-center border-none text-lightTextSecondary dark:text-darkTextSecondary md:col-start-2">
			<p className="text-xs opacity-60">
				&copy;{year} Project{' '}
				<span className="text-lightAccent/90 dark:text-darkAccent/50">
					HomeLLM
				</span>
			</p>
		</footer>
	);
}
