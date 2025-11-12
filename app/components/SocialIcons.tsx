import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiOllama } from 'react-icons/si';

export default function SocialIcons() {
	return (
		<div className="flex gap-4 text-xl text-lightTextSecondary dark:text-darkAccent/30">
			<Link
				target="_blank"
				className="mb-20 transition-all duration-150 hover:opacity-80 lg:mb-0"
				href="https://github.com/Utopiality7?tab=repositories"
			>
				<FaGithub />
			</Link>
			<Link
				target="_blank"
				className="transition-all duration-150 hover:opacity-80"
				href="https://ollama.com/"
			>
				<SiOllama />
			</Link>
		</div>
	);
}
