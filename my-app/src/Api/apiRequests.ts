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
	id: number,
	userData: any
): Promise<(Partial<UsersDto> & { id: number }) | undefined> => {
	try {
		const { data } = await axios.put(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			userData
		);
		console.log('UDAŁO SIE');
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const addUser = async (
	userData: any
): Promise<(Partial<UsersDto> & { id: number }) | undefined> => {
	try {
		const { data } = await axios.post(
			`https://jsonplaceholder.typicode.com/users`,
			userData
		);
		console.log('UDAŁO SIE');
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (
	id: number
): Promise<(Partial<UsersDto> & { id: number }) | undefined> => {
	try {
		const { data } = await axios.delete(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		console.log('UDAŁO SIE');
		return data;
	} catch (error) {
		console.log(error);
	}
};
