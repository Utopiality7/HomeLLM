import { type Metadata } from 'next';
import ollama from 'ollama';
import ModelSearchAndDisplay from '../components/ModelSearchAndDisplay';

export const metadata: Metadata = {
	title: 'My Models',
};

export default async function Page() {
	// List of all models
	const modelsList = await ollama.list();

	const models = modelsList.models;

	return (
		<div className="h-full max-h-full">
			<ModelSearchAndDisplay models={models} />
		</div>
	);
}
