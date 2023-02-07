import React, { useState } from 'react';
import { getPosts } from '../Api/apiRequests';
import Post from '../Components/Post';
import { useAsyncEffect } from '../Hooks/useAsyncEffect';
import { PostDto } from '../Interfaces/interfaces';

const PostsScreen = () => {
	const [posts, setPosts] = useState<PostDto[]>([]);

	useAsyncEffect(async () => {
		const posts = await getPosts();
		if (posts) {
			setPosts(posts);
		}
	}, []);

	console.log(posts);

	return (
		<>
			<div className="posts-container">
				{posts.map((post, index) => (
					<Post id={post.id} key={index} title={post.title} body={post.body} />
				))}
			</div>
		</>
	);
};

export default PostsScreen;
