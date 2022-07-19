import { writable } from 'svelte/store';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export type Notification = {
	id: string;
	message: string;
	type: NotificationType;
	timeoutMilliseconds: number;
	timeoutID: number;
};

export const Notifications = writable<Notification[]>([]);
