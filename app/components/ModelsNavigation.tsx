'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainNavClass: string =
	'hover:text-lightPrimary dark:hover:text-darkPrimary w-1/3 cursor-pointer px-3 py-1 transition-all duration-200 ';

const activeNavClas: string =
	'text-lightPrimary dark:text-darkPrimary disabled cursor-not-allowed';

export default function ModelsNavigation() {
	const pathname = usePathname();

	return (
		<div className="flex items-center gap-2 divide-x divide-lightPrimary !divide-opacity-30 rounded-md border border-lightPrimary px-2 text-sm font-semibold dark:divide-darkPrimary dark:border-darkPrimary">
			<Link
				href="/models"
				className={`${mainNavClass} ${pathname === '/models' ? activeNavClas : ''}`}
			>
				List
			</Link>
			<Link
				href="/models/pull"
				className={`${mainNavClass} ${pathname === '/models/pull' ? activeNavClas : ''}`}
			>
				Pull
			</Link>
			<Link
				href="/models/create"
				className={`${mainNavClass} ${pathname === '/models/create' ? activeNavClas : ''}`}
			>
				Create
			</Link>
		</div>
	);
}
