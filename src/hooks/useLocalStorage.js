import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
	const [value, setValue] = useState(() => {
		try {
			const saved = localStorage.getItem(key);
			return saved !== null ? JSON.parse(saved) : defaultValue;
		} catch (error) {
			console.error(`Ошибка чтения localStorage для ключа "${key}":`, error);
			return defaultValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`Ошибка записи в localStorage для ключа "${key}":`, error);
		}
	}, [key, value]);

	return [value, setValue];
}
