import type { FirebaseApp } from 'firebase/app';
import type { Auth, AuthProvider } from 'firebase/auth';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithRedirect,
	getRedirectResult,
	GoogleAuthProvider,
	GithubAuthProvider
} from 'firebase/auth';
import { LogInUser } from '$lib/block/auth/action';
import { AppendNotification } from '$lib/block/notification/action';

// Providers registered with the auth instance.
type provider = 'Google' | 'Github';

export default class AuthHandler {
	private readonly auth: Auth;
	private readonly provider: Record<provider, AuthProvider>;

	constructor(app: FirebaseApp) {
		this.auth = getAuth(app);
		this.auth.useDeviceLanguage();
		this.provider = {
			Google: new GoogleAuthProvider(),
			Github: new GithubAuthProvider()
		};
	}

	// Create user with email and password
	public async createUserWithEmailAndPassword(email: string, password: string): Promise<void> {
		try {
			const result = await createUserWithEmailAndPassword(this.auth, email, password);
			if (result) {
				LogInUser(result.user);
			}
		} catch (error) {
			if (error instanceof Error) {
				AppendNotification(error.message, 'error');
				return;
			}
		}
	}

	// Sign in with email and password
	public async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
		try {
			const result = await signInWithEmailAndPassword(this.auth, email, password);
			if (result) {
				LogInUser(result.user);
			}
		} catch (error) {
			if (error instanceof Error) {
				AppendNotification(error.message, 'error');
				return;
			}
		}
	}

	// signInWithProvider will take a provider name and will redirect to chosen providers SSO page
	public async signInWithProvider(provider: provider): Promise<void> {
		try {
			const result = await signInWithRedirect(this.auth, this.provider[provider]);
			window.sessionStorage.setItem('redirectProvider', provider);
			console.log(result);
		} catch (error) {
			if (error instanceof Error) {
				AppendNotification(error.message, 'error');
				return;
			}
		}
	}

	// redirectResult is used to catch the redirect from the SSO page
	public async redirectResult(): Promise<void> {
		try {
			const provider = window.sessionStorage.getItem('redirectProvider') as provider | undefined;
			if (!provider) {
				throw new Error('No redirect provider stored in session storage');
			}

			const result = await getRedirectResult(this.auth, this.provider[provider]);
			console.log(result);
			if (result) {
				LogInUser(result.user);
			}
		} catch (error) {
			if (error instanceof Error) {
				AppendNotification(error.message, 'error');
				return;
			}
		}
	}
}
