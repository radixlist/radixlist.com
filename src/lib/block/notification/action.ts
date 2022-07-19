import type { NotificationType } from './store';
import { Notifications } from './store';
import { customAlphabet } from 'nanoid/non-secure';

// default timeout for notifications.
export const defaultTimeout = 5000;

// Create a nanoID instance with custom alphabet.
const nanoID = customAlphabet('1234567890', 10);

// Append notification will append a notification to the Notifications store and will return the notification id that can
// be used to delete the notification
export const AppendNotification = (
	message: string,
	type: NotificationType,
	timeoutMilliseconds: number = defaultTimeout
): string => {
	const id = `notification-${nanoID()}`;

	// Set the timeout to remove the notification
	const timeoutID = window.setTimeout(() => RemoveNotification(id), timeoutMilliseconds);

	// Append the notification to the store
	Notifications.update((n) => [
		...n,
		{
			id,
			message,
			type,
			timeoutMilliseconds,
			timeoutID
		}
	]);
	return id;
};

// Remove notification will remove a notification from the Notifications store by id.
export const RemoveNotification = (id: string) => {
	Notifications.update((n) => {
		const notification = n.find((n) => n.id === id);

		if (notification) {
			window.clearTimeout(notification.timeoutID);
			return n.filter((n) => n.id !== id);
		}

		return n;
	});
};
