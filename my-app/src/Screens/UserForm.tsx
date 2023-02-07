import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { addUser, editUser } from '../Api/apiRequests';
import { UserFormInterface } from '../Interfaces/interfaces';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Components/Modal';

const newUserDefaultValues = {
	name: '',
	username: '',
	email: '',
	street: '',
	city: '',
};

const UserForm = () => {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const userUpdatedNotification = () => toast('User updated!');
	const errorNotification = () => toast('Error');
	const userAddedNotification = () => toast('User Added');
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
					userUpdatedNotification();
				})
				.catch((error) => {
					errorNotification();
				});
		}

		if (!userData) {
			addUser(data)
				.then(() => {
					userAddedNotification();
				})
				.catch(() => {
					errorNotification();
				});
		}
	};

	const emailPattern =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return (
		<>
			<div className="userForm-container">
				<form onSubmit={handleSubmit(handleSubmitRequest)}>
					<div>
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
					</div>
				</form>
				<button
					className="open-modal-btn"
					onClick={() => setShowConfirmationModal(true)}
				>
					Open Modal
				</button>
				<Modal
					isVisible={showConfirmationModal}
					setIsVisible={setShowConfirmationModal}
					handleSubmit={handleSubmit(handleSubmitRequest)}
				/>
			</div>
		</>
	);
};

export default UserForm;
