import React, { useState } from 'react';
import { editUser, getUsers } from '../Api/apiRequests';
import { UsersDto } from '../Interfaces/interfaces';
import { useAsyncEffect } from '../Hooks/useAsyncEffect';
import User from '../Components/User';
import { AddUser } from '../Components/Icons';

const UsersScreen = () => {
	const [users, setUsers] = useState<UsersDto[]>([]);

	useAsyncEffect(async () => {
		const users = await getUsers();
		if (users) {
			setUsers(users);
			editUser(1);
		}
	}, []);

	return (
		<div className="users-container">
			<div className="add-user-container">
				<AddUser color="black" size={30} />
			</div>
			{users.map((user) => (
				<User name={user.name} key={user.id} />
			))}
		</div>
	);
};

export default UsersScreen;
