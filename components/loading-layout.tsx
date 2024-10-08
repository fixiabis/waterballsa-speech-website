import { LoadingSpinner } from "./loading-spinner";

export function LoadingLayout() {
	return (
		<main className="h-screen flex flex-col items-center justify-center">
			<LoadingSpinner />
		</main>
	);
}
