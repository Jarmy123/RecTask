import React from 'react';
import { EditUser, RemoveUser } from './Icons';

const User = ({ name }: { name: string }) => {
	return (
		<>
			<div className="user-container">
				<div className="user-name">{name}</div>
				<div className="btns-box">
					<EditUser size={30} color="blue" />
					<RemoveUser size={30} color="blue" />
				</div>
			</div>
		</>
	);
};

export default User;
