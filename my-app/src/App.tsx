import React from 'react';
import Navbar from './Components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import PhotosScreen from './Screens/PhotosScreen';
import PostsScreen from './Screens/PostsScreen';
import UsersScreen from './Screens/UsersScreen';
import { Route, Routes } from 'react-router-dom';
import UserForm from './Screens/UserForm';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/posts" element={<PostsScreen />} />
					<Route path="/photos" element={<PhotosScreen />} />
					<Route path="/users" element={<UsersScreen />} />
					<Route path="/form" element={<UserForm />} />
				</Routes>
			</div>
			<ToastContainer position="top-center" />
			<Footer />
		</>
	);
}

export default App;
