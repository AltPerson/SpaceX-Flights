export interface RocketType {
	id: string;
	description: string;
	name: string;
	img: string
}

export interface ReceivedData {
	rockets: RocketType[];
}