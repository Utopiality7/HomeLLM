import { type Metadata } from 'next';
import ollama from 'ollama';
import ModelSearchAndDisplay from '../components/ModelSearchAndDisplay';

export const metadata: Metadata = {
	title: 'My Models',
};

export default async function Page() {
	// List of all models
	let models;
	try {
		const modelsList = await ollama.list();

		models = modelsList.models;
	} catch (err) {
		throw new Error('Error fetching models');
	}

	return (
		<div className="h-full max-h-full">
			<ModelSearchAndDisplay models={models} />
		</div>
	);
}
