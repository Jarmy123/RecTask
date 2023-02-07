import React from 'react';
import { deleteUser, editUser } from '../Api/apiRequests';
import { IconsProps } from '../Interfaces/interfaces';

export const AddUser = ({ size, color }: IconsProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 8a6 6 0 1 1 12 0A6 6 0 0 1 4 8zm15 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1zM6.5 18C5.24 18 4 19.213 4 21a1 1 0 1 1-2 0c0-2.632 1.893-5 4.5-5h7c2.607 0 4.5 2.368 4.5 5a1 1 0 1 1-2 0c0-1.787-1.24-3-2.5-3h-7z"
				fill={color}
			/>
		</svg>
	);
};

export const EditUser = ({ size, color, ...props }: IconsProps) => {
	return (
		<svg
			{...props}
			width={size}
			height={size}
			viewBox="0 0 20.109 20.109"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="edit-user-left-8" transform="translate(-1.891 -1.892)">
				<path
					id="secondary"
					fill={color}
					d="M3.29,4.69l1.4-1.4a1,1,0,0,1,1.4,0L11,8.2V11H8.2L3.29,6.09a1,1,0,0,1,0-1.4Z"
				/>
				<path
					id="primary"
					d="M3.29,4.69l1.4-1.4a1,1,0,0,1,1.4,0L11,8.2V11H8.2L3.29,6.09a1,1,0,0,1,0-1.4Z"
					fill="none"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<path
					id="primary-2"
					data-name="primary"
					d="M11.62,3.16c.21-.05.43-.09.65-.12A6,6,0,0,1,19,9a5.94,5.94,0,0,1-1.34,3.77,1,1,0,0,0,.28,1.45A7,7,0,0,1,21,20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1,7,7,0,0,1,2.11-5"
					fill="none"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export const RemoveUser = ({
	size,
	color,
	id,
}: {
	size: number;
	color: string;
	id: number;
}) => {
	return (
		<svg
			onClick={() => deleteUser(id)}
			fill={color}
			width={size}
			height={size}
			viewBox="0 0 32 32"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>remove</title>
			<path d="M11.188 4.781c6.188 0 11.219 5.031 11.219 11.219s-5.031 11.188-11.219 11.188-11.188-5-11.188-11.188 5-11.219 11.188-11.219zM11.25 17.625l3.563 3.594c0.438 0.438 1.156 0.438 1.594 0 0.406-0.406 0.406-1.125 0-1.563l-3.563-3.594 3.563-3.594c0.406-0.438 0.406-1.156 0-1.563-0.438-0.438-1.156-0.438-1.594 0l-3.563 3.594-3.563-3.594c-0.438-0.438-1.156-0.438-1.594 0-0.406 0.406-0.406 1.125 0 1.563l3.563 3.594-3.563 3.594c-0.406 0.438-0.406 1.156 0 1.563 0.438 0.438 1.156 0.438 1.594 0z"></path>
		</svg>
	);
};
