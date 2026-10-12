import React from "react";
import { useFetch } from "../hooks/useFetch";

export function UsersList({ url }) {
	const { data: users, loading, error } = useFetch(url);

	if (loading) return <div>Загрузка пользователей...</div>;
	if (error) return <div style={{ color: "red" }}>Ошибка: {error}</div>;
	if (!users || users.length === 0) return <div>Пользователи не найдены.</div>;

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					<strong>{user.name}</strong> ({user.email})
				</li>
			))}
		</ul>
	);
}
