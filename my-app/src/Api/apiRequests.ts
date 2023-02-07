import axios from 'axios';
import { UsersDto } from '../Interfaces/interfaces';

export const getUsers = async (): Promise<UsersDto[] | undefined> => {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const editUser = async (
	id: number
): Promise<(Partial<UsersDto> & { id: number }) | undefined> => {
	try {
		const { data } = await axios.put(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			{
				name: 'Roman',
				username: 'Jarmy',
			}
		);
		console.log({ tutaj: data });
		return data;
	} catch (error) {
		console.log(error);
	}
};
