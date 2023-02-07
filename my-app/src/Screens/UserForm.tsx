import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { addUser, editUser } from '../Api/apiRequests';
import { UserFormInterface, UsersDto } from '../Interfaces/interfaces';

const newUserDefaultValues = {
	name: '',
	username: '',
	email: '',
	street: '',
	city: '',
};

const UserForm = () => {
	const location = useLocation();
	const userData: UserFormInterface = location.state;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: userData
			? {
					name: userData.name,
					username: userData.username,
					email: userData.email,
					street: userData.street,
					city: userData.city,
			  }
			: newUserDefaultValues,
	});

	const handleSubmitRequest = (data: any) => {
		if (userData) {
			editUser(userData.id, data)
				.then(() => {
					//todo succes toastify
				})
				.catch(() => {
					//todo catch error toastify
				});
		}
		if (!userData) {
			addUser(data);
		}
	};

	const [data, setData] = useState('');
	const emailPattern =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<form onSubmit={handleSubmit((data) => handleSubmitRequest(data))}>
			<div className="userForm-container">
				<input
					{...register('name', { required: true, maxLength: 15 })}
					placeholder="Name"
				/>
				{errors.name && (
					<p className="validation-msg">
						Name is required and max length is 15
					</p>
				)}
				<input {...register('username')} placeholder="Username" />
				<input
					{...register('email', {
						required: true,
						pattern: emailPattern,
					})}
					placeholder="Email"
				/>
				{errors.email && (
					<p className="validation-msg">Please check the Email</p>
				)}
				<input {...register('street')} placeholder="Street" />
				<input {...register('city')} placeholder="City" />

				<input type="submit" />
			</div>
		</form>
	);
};

export default UserForm;
