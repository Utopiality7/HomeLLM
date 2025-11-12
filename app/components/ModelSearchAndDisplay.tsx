'use client';
import { ChangeEvent, useState } from 'react';
import { Model } from '../types/types';
import ModelDisplay from './ModelDisplay';

export default function ModelSearchAndDisplay({ models }: { models: Model[] }) {
	const [searchValue, setSearchValue] = useState<string>('');

	const filteredModels = models.filter(model =>
		model.name.startsWith(searchValue.toLowerCase())
	);

	return (
		<>
			<div className="flex flex-col">
				<div className="flex justify-center">
					<input
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setSearchValue(e.target.value)
						}
						placeholder="Search models"
						className="mx-4 mb-2 flex-1 rounded-lg bg-lightSecondary px-4 py-2 focus:outline-none focus:ring focus:ring-lightAccent dark:bg-darkSecondary dark:focus:ring-darkAccent lg:max-w-[50%]"
						type="text"
					/>
				</div>
			</div>
			<ModelDisplay modelsList={filteredModels} />
		</>
	);
}
