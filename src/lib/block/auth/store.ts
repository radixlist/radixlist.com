import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

export const UserCredentials = writable<User | undefined>(undefined);
export const IsLoggedIn = writable<boolean>(false);
