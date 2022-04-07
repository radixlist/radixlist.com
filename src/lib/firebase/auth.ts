import { newMessage } from '$lib/components/notifications/store';
import { AuthErrorCodes, signInWithEmailAndPassword, type Auth, type User } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from './firebase';

const ErrorMessage: Record<string, string> = {
	[AuthErrorCodes.INVALID_EMAIL]: 'Your email is invalid.',
	[AuthErrorCodes.INVALID_PASSWORD]: 'Your password is invalid.'
};

class Authentication {
	private auth: Auth;
	private user?: User;

	private static _instance: Authentication;

	constructor() {
		this.auth = getAuth(firebase.client);
	}

	public static get getInstance(): Authentication {
		if (!this._instance) {
			this._instance = new Authentication();
		}

		return this._instance;
	}

	public async createUserWithEmailAndPassword(email: string, password: string): Promise<void> {
		try {
			const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
			this.user = userCredential.user;
		} catch (error) {
			newMessage(
				'Authentication.createUserWithEmailAndPassword',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}

	public async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
		try {
			const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
			this.user = userCredential.user;
		} catch (error) {
			newMessage(
				'Authentication.signInWithEmailAndPassword',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}

	public loggedIn(): boolean {
		return false;
	}
}

export default Authentication.getInstance;
