import React, { useState } from 'react';
import { getUsers } from '../Api/apiRequests';
import { UsersDto } from '../Interfaces/interfaces';
import { useAsyncEffect } from '../Hooks/useAsyncEffect';
import User from '../Components/User';
import { AddUser } from '../Components/Icons';
import { Link } from 'react-router-dom';

const UsersScreen = () => {
	const [users, setUsers] = useState<UsersDto[]>([]);

	useAsyncEffect(async () => {
		const users = await getUsers();
		if (users) {
			setUsers(users);
		}
	}, []);

	return (
		<div className="users-container">
			<div className="add-user-container">
				<Link to="/form">
					<AddUser color="black" size={30} />
				</Link>
			</div>
			{users.map((user) => (
				<User
					name={user.name}
					username={user.username}
					email={user.email}
					street={user.address.street}
					city={user.address.city}
					key={user.id}
					id={user.id}
				/>
			))}
		</div>
	);
};

export default UsersScreen;
