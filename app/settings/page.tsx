import Link from 'next/link';
import { Metadata } from 'next';
import ConnectionTest from '../components/ConnectionTest';
import SettingsForm from '../components/SettingsForm';

export const metadata: Metadata = {
	title: 'Settings',
};

export default function Page() {
	return (
		<div className="pageContainer flex flex-col items-center gap-4">
			<h2 className="mb-2 self-start text-center text-xl font-bold lg:text-3xl">
				My Settings
			</h2>

			<ConnectionTest />

			<SettingsForm />

			{/* docs */}
			<div className="mt-10 max-w-sm self-center rounded-md bg-lightSecondary px-2 py-1 text-center text-sm text-lightTextSecondary dark:bg-darkSecondary dark:text-darkTextSecondary">
				Visit official{' '}
				<Link
					className="text-lightPrimary transition-all duration-150 hover:opacity-80 dark:text-darkPrimary"
					href="https://github.com/Utopiality7"
					target="_blank"
				>
					/Documentation.
				</Link>
			</div>

			<p className="text-center text-xs font-light italic text-lightTextSecondary/60 dark:text-darkTextSecondary/60">
				&quot;Make AI Free again&quot;
			</p>
		</div>
	);
}
