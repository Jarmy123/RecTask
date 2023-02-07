import axios from 'axios';
import { PostDto, UsersDto } from '../Interfaces/interfaces';

//change url to simulate error
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<UsersDto[] | undefined> => {
	try {
		const { data } = await axios.get(`${baseUrl}/users`);
		return data;
	} catch (error) {
		throw new Error('Error');
	}
};

export const editUser = async (
	id: number,
	userData: any
): Promise<(Partial<UsersDto> & { id: number }) | undefined> => {
	try {
		const { data } = await axios.put(`${baseUrl}/users/${id}`, userData);
		return data;
	} catch (error) {
		throw new Error('Error');
	}
};

export const addUser = async (
	userData: any
): Promise<(Partial<UsersDto> & { id: number }) | undefined> => {
	try {
		const { data } = await axios.post(`${baseUrl}/users`, userData);
		return data;
	} catch (error) {
		throw new Error('Error');
	}
};

export const deleteUser = async (
	id: number
): Promise<(Partial<UsersDto> & { id: number }) | undefined> => {
	try {
		const { data } = await axios.delete(`${baseUrl}/users/${id}`);
		return data;
	} catch (error) {
		throw new Error('Error');
	}
};

export const getPosts = async (): Promise<PostDto[] | undefined> => {
	try {
		const { data } = await axios.get(`${baseUrl}/posts`);
		return data;
	} catch (error) {
		throw new Error('Error');
	}
};
