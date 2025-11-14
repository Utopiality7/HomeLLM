import { Suspense } from 'react';
import ModelsNavigation from '../components/ModelsNavigation';
import Spinner from '../components/Spinner';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="pageContainer flex h-full max-h-full flex-col">
			<div className="my-2 mb-6 flex items-center justify-between">
				<h2 className="text-xl font-bold capitalize lg:text-3xl">My models</h2>
				<ModelsNavigation />
			</div>
			{/* Suspense boundary */}
			<Suspense fallback={<Spinner />}>
				<div className="mx-auto h-96 w-full max-w-[200rem] flex-grow overflow-y-scroll pt-2 lg:w-[80%]">
					{children}
				</div>
			</Suspense>
		</div>
	);
}
