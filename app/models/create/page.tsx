import TinySpinner from '@/app/components/TinySpinner';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Models-Create',
};

export default function Page() {
	return (
		<div>
			CREATE
			<div>
				<button>
					<TinySpinner /> CLICK
				</button>
			</div>
		</div>
	);
}
