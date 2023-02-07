import React from 'react';
import { Link } from 'react-router-dom';
import { EditUser, RemoveUser } from './Icons';
import { deleteUser } from '../Api/apiRequests';

const User = ({
	name,
	username,
	email,
	street,
	city,
	id,
}: {
	name: string;
	username: string;
	email: string;
	street: string;
	city: string;
	id: number;
}) => {
	return (
		<>
			<div className="user-container">
				<div className="user-name">{name}</div>
				<div className="btns-box">
					<Link
						to="/form"
						state={{
							name: name,
							username: username,
							email: email,
							street: street,
							city: city,
							id: id,
						}}
					>
						<EditUser size={30} color="blue" />
					</Link>
					<RemoveUser size={30} color="blue" id={id} />
				</div>
			</div>
		</>
	);
};

export default User;
