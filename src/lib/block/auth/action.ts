import type { User } from 'firebase/auth';
import { UserCredentials, IsLoggedIn } from './store';

export const LogInUser = (user: User) => {
	UserCredentials.set(user);
	IsLoggedIn.set(true);
};
