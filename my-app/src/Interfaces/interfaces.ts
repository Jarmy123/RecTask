export interface UsersDto {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export interface IconsProps {
	size: number;
	color: string;
	onClick?: () => void;
}

export interface UserFormInterface {
	name: string;
	username: string;
	email: string;
	street: string;
	city: string;
	id: number;
}

export interface PostDto extends PostProps {
	userId: number;
}

export interface PostProps {
	id: number;
	title: string;
	body: string;
}
