import { writable } from 'svelte/store';
import { v4 } from 'uuid';

export type MessageType = 'message' | 'error';

export type Message = {
	id: string;
	source?: string;
	type: MessageType;
	message: string;
	stack: string;
	code?: number;
};

export const newMessage = (
	source: string,
	type: MessageType,
	message: string,
	stack?: string,
	code?: number
) => {
	messages.update((messages) => [
		...messages,
		{
			id: v4(),
			source,
			type,
			message,
			stack,
			code
		}
	]);
};

export const messages = writable<Message[]>([]);

messages.subscribe((value) => {
	console.log($messages, value);
});
