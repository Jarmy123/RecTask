import React from 'react';
import { PostProps } from '../Interfaces/interfaces';

const Post = ({ id, title, body }: PostProps) => {
	return (
		<div className="post-container">
			<h2>{title}</h2>
			<p>{id}</p>
			<p>{body}</p>
		</div>
	);
};

export default Post;
