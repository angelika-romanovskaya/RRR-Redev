import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { UsersList } from "./UsersList";

export function SearchUsers() {
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 500);

	const apiUrl = debouncedSearch
		? `https://github.com/search?q=${debouncedSearch}`
		: null;

	return (
		<div style={{ padding: "10px", border: "1px solid #ccc" }}>
			<h3>Поиск пользователей</h3>
			<input
				type="text"
				placeholder="Введите имя для поиска..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				style={{
					width: "100%",
					padding: "8px",
					marginBottom: "10px",
					boxSizing: "border-box",
				}}
			/>
			<p style={{ fontSize: "0.9em", color: "#666" }}>
				Запрос отправится через 500мс после окончания ввода. Текущее отложенное
				значение: "{debouncedSearch}"
			</p>

			<UsersList url={apiUrl} />
		</div>
	);
}
