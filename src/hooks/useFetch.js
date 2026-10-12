import { useState, useEffect } from "react";

export function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!url) return;

		const abortController = new AbortController();

		async function fetchData() {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(url, { signal: abortController.signal });
				if (!response.ok) {
					throw new Error(`Ошибка запроса: ${response.status}`);
				}
				const json = await response.json();
				setData(json);
			} catch (err) {
				if (err.name !== "AbortError") {
					setError(err.message || "Что-то пошло не так");
				}
			} finally {
				setLoading(false);
			}
		}

		fetchData();

		return () => {
			abortController.abort();
		};
	}, [url]);

	return { data, loading, error };
}
