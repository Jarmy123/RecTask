import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import ProfilePicture from '../icons/user.png';

const Navbar = () => {
	return (
		<nav className="nav">
			<Link to="/" className="site-title">
				Site Name
			</Link>
			<ul>
				<CustomLinks to="/posts">Posts</CustomLinks>
				<CustomLinks to="/photos">Photos</CustomLinks>
				<CustomLinks to="/users">Users</CustomLinks>
				<Link
					to="/form"
					state={{
						name: 'Roman Jarmuż',
						username: 'Jarmy',
						email: 'romanjarmuz@gmail.com',
						street: 'Sienkiewicza',
						city: 'Nowa Sól',
						id: 1,
					}}
				>
					<img src={ProfilePicture} alt="ProfilePicture" width={50} />
				</Link>
			</ul>
		</nav>
	);
};

const CustomLinks = ({
	to,
	children,
	...props
}: {
	to: string;
	children: string;
}) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? 'active' : ''}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
};

export default Navbar;
