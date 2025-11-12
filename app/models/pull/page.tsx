import PullModel from '@/app/components/PullModel';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Models-Pull',
};

export default function Page() {
	return <PullModel />;
}
