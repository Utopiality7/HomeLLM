import ChatLoader from '@/app/components/ChatLoader';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Models-Create',
};

export default function Page() {
	return (
		<div>
			CREATE
			{/* <ChatLoader isVisible /> */}
		</div>
	);
}
