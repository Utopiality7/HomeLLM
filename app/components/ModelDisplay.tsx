'use client';

import { useState } from 'react';
import { AiOutlineInfo } from 'react-icons/ai';
import { LuPlay } from 'react-icons/lu';
import { Model } from '../types/types';

export default function ModelDisplay({ modelsList }: { modelsList: Model[] }) {
	// console.log(modelsList);

	const [isInfoOpen, setInfoOpen] = useState<boolean>(false);

	return (
		<ul className="flex h-full flex-col gap-4 divide-y-2 divide-lightSecondary divide-opacity-50 overflow-y-scroll dark:divide-darkSecondary">
			{modelsList.map((el, idx) => {
				return (
					<li className="p-2 lg:w-2/3 lg:self-center" key={idx}>
						<div className="flex justify-between">
							<div className="flex gap-3 font-light">
								<p className="font-semibold">{el.name}</p>
								<p>{el.details.parameter_size}</p>
							</div>

							<p className="text-sm font-light text-lightTextSecondary dark:text-darkTextSecondary">
								{new Date(el.modified_at).toISOString().split('T')[0]}
							</p>
						</div>

						<div className="mt-1 flex items-center gap-6">
							<p className="font-light text-lightTextSecondary dark:text-darkTextSecondary">
								{(el.size / (1024 * 1024 * 1024)).toFixed(2)} GB
							</p>
							{/* buttons */}
							<div className="flex flex-1 justify-between">
								{' '}
								<button
									onClick={() => setInfoOpen(prev => !prev)}
									className="flex items-center rounded-xl bg-lightSecondary px-4 py-1 text-sm uppercase transition-all duration-150 hover:opacity-80 dark:bg-darkSecondary"
								>
									<AiOutlineInfo />
									<span className="text-xs">
										{isInfoOpen ? 'Close' : 'Info'}
									</span>
								</button>
								<button className="rounded-full bg-lightPrimary p-2 text-lightBg transition-all duration-150 hover:opacity-80 dark:bg-darkPrimary dark:text-darkBg">
									<LuPlay />
								</button>
							</div>
						</div>
						{/* info */}
						{isInfoOpen && <div>Info placeholder</div>}
					</li>
				);
			})}
		</ul>
	);
}
