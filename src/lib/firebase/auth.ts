import type { Auth, User } from 'firebase/auth';
import {
	AuthErrorCodes,
	getAuth,
	onAuthStateChanged,
	setPersistence,
	browserLocalPersistence,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithRedirect,
	getRedirectResult,
	GoogleAuthProvider,
	FacebookAuthProvider,
	TwitterAuthProvider,
	GithubAuthProvider,
	// OAuthProvider, // Microsoft/Apple
	signOut
} from 'firebase/auth';
import { newMessage } from '$lib/components/notifications/store';
import firebase from './firebase';
import { writable } from 'svelte/store';

type AuthMethod = 'google' | 'facebook' | 'twitter' | 'apple' | 'github' | 'microsoft';

export const session = writable<User | Record<string, unknown>>({});

class Authentication {
	private readonly auth: Auth;

	private static _instance: Authentication;

	constructor() {
		this.auth = getAuth(firebase.client);

		onAuthStateChanged(this.auth, (user) => {
			if (user) {
				session.update(() => user);
				return;
			}
			session.update(() => ({}));
		});
	}

	public static get getInstance(): Authentication {
		if (!this._instance) {
			this._instance = new Authentication();
		}

		return this._instance;
	}

	// Use this flow to create an account with email and password.
	public async createUserWithEmailAndPassword(email: string, password: string): Promise<void> {
		try {
			await createUserWithEmailAndPassword(this.auth, email, password);
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

	// Use this flow to sign in with email and password.
	public async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
		try {
			await signInWithEmailAndPassword(this.auth, email, password);
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

	// Use this method to start login flow with Google.
	public async signInWithGoogle(): Promise<void> {
		try {
			window.sessionStorage.setItem('authMethod', 'google');
			const provider = new GoogleAuthProvider();
			await setPersistence(this.auth, browserLocalPersistence);
			await signInWithRedirect(this.auth, provider);
		} catch (error) {
			window.sessionStorage.removeItem('authMethod');
			newMessage(
				'Authentication.signInWithGoogle',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}

	// Use this method to start login flow with Facebook.
	public async signInWithFacebook(): Promise<void> {
		try {
			window.sessionStorage.setItem('authMethod', 'facebook');
			const provider = new FacebookAuthProvider();
			await setPersistence(this.auth, browserLocalPersistence);
			await signInWithRedirect(this.auth, provider);
		} catch (error) {
			window.sessionStorage.removeItem('authMethod');
			newMessage(
				'Authentication.signInWithFacebook',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}

	// Use this method to start login flow with Twitter.
	public async signInWithTwitter(): Promise<void> {
		try {
			window.sessionStorage.setItem('authMethod', 'twitter');
			const provider = new TwitterAuthProvider();
			await setPersistence(this.auth, browserLocalPersistence);
			await signInWithRedirect(this.auth, provider);
		} catch (error) {
			window.sessionStorage.removeItem('authMethod');
			newMessage(
				'Authentication.signInWithTwitter',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}

	// Use this method to start login flow with GitHub.
	public async signInWithGithub(): Promise<void> {
		try {
			window.sessionStorage.setItem('authMethod', 'github');
			const provider = new FacebookAuthProvider();
			await setPersistence(this.auth, browserLocalPersistence);
			await signInWithRedirect(this.auth, provider);
		} catch (error) {
			window.sessionStorage.removeItem('authMethod');
			newMessage(
				'Authentication.signInWithGithub',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}

	// This method is called to catch a redirect after attempting to sign in.
	public async getRedirectResult(): Promise<boolean> {
		const authMethod = window.sessionStorage.getItem('authMethod') as AuthMethod;
		if (!authMethod) {
			return false;
		}
		try {
			const result = await getRedirectResult(this.auth);
			switch (authMethod) {
				case 'google':
					GoogleAuthProvider.credentialFromResult(result);
					break;
				case 'facebook':
					FacebookAuthProvider.credentialFromResult(result);
					break;
				case 'twitter':
					TwitterAuthProvider.credentialFromResult(result);
					break;
				case 'github':
					GithubAuthProvider.credentialFromResult(result);
					break;
				case 'apple':
					// TODO: Implement Apple Auth
					break;
				case 'microsoft':
					// TODO: Implement Microsoft Auth
					break;
			}
			window.sessionStorage.removeItem('authMethod');
			console.log('Authentication.getRedirectResult', result);
			return true;
		} catch (error) {
			newMessage(
				'Authentication.catchRedirectResult',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}

	public async signOut(): Promise<void> {
		try {
			await signOut(this.auth);
		} catch (error) {
			newMessage(
				'Authentication.Logout',
				'error',
				ErrorMessage[error.code] ?? error.message,
				error.stack,
				error.code
			);
		}
	}
}

export default Authentication.getInstance as Authentication;

const ErrorMessage: Record<string, string> = {
	[AuthErrorCodes.ADMIN_ONLY_OPERATION]: 'This operation is restricted to administrators only.',
	[AuthErrorCodes.ARGUMENT_ERROR]: 'An invalid argument was provided. Please contact support.',
	[AuthErrorCodes.APP_NOT_AUTHORIZED]:
		'This app is not authorized to use Firebase Authentication with the provided API key. Please contact support.',
	[AuthErrorCodes.APP_NOT_INSTALLED]: 'The Firebase app is not installed. Please contact support.',
	[AuthErrorCodes.CAPTCHA_CHECK_FAILED]: 'The reCAPTCHA verification failed.',
	[AuthErrorCodes.CODE_EXPIRED]: 'Your code has expired.',
	[AuthErrorCodes.CORDOVA_NOT_READY]: 'Cordova is not ready yet.',
	[AuthErrorCodes.CORS_UNSUPPORTED]: 'This browser is not supported.',
	[AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE]: 'This email address is already in use.',
	[AuthErrorCodes.CREDENTIAL_MISMATCH]: 'Your email or password is incorrect.',
	[AuthErrorCodes.CREDENTIAL_TOO_OLD_LOGIN_AGAIN]:
		'You need to sign in again with your email and password.',
	[AuthErrorCodes.DEPENDENT_SDK_INIT_BEFORE_AUTH]:
		'The dependent SDK must be initialized before the Auth SDK. Please contact support.',
	[AuthErrorCodes.DYNAMIC_LINK_NOT_ACTIVATED]:
		'Your dynamic link is not activated. Please contact support.',
	[AuthErrorCodes.EMAIL_CHANGE_NEEDS_VERIFICATION]:
		'You must verify your email address before you can change it.',
	[AuthErrorCodes.EMAIL_EXISTS]: 'Email is already in use.',
	[AuthErrorCodes.EMULATOR_CONFIG_FAILED]: 'Emulator config failed.',
	[AuthErrorCodes.EXPIRED_OOB_CODE]: 'The action code has expired.',
	[AuthErrorCodes.EXPIRED_POPUP_REQUEST]: 'The popup has expired.',
	[AuthErrorCodes.INTERNAL_ERROR]: 'An internal error has occurred.',
	[AuthErrorCodes.INVALID_API_KEY]: 'The API key is invalid. Please contact support.',
	[AuthErrorCodes.INVALID_APP_CREDENTIAL]:
		'The supplied auth credential is malformed, has expired or is otherwise invalid. Please contact support.',
	[AuthErrorCodes.INVALID_APP_ID]: 'Invalid app id. Please contact support.',
	[AuthErrorCodes.INVALID_AUTH_EVENT]: 'Invalid auth event. Please contact support.',
	[AuthErrorCodes.INVALID_CERT_HASH]: 'The certificate hash is invalid. Please contact support.',
	[AuthErrorCodes.INVALID_CODE]: 'Invalid action code.',
	[AuthErrorCodes.INVALID_CONTINUE_URI]: 'The continue URL provided in the request is invalid.',
	[AuthErrorCodes.INVALID_CORDOVA_CONFIGURATION]:
		'The Cordova config was invalid. Please contact support.',
	[AuthErrorCodes.INVALID_CUSTOM_TOKEN]:
		'The custom token format is incorrect. Please contact support.',
	[AuthErrorCodes.INVALID_DYNAMIC_LINK_DOMAIN]:
		'The provided dynamic link domain is not configured. Please contact support.',
	[AuthErrorCodes.INVALID_EMAIL]: 'Your email is invalid.',
	[AuthErrorCodes.INVALID_EMULATOR_SCHEME]: 'Emulator scheme is invalid. Please contact support.',
	[AuthErrorCodes.INVALID_IDP_RESPONSE]: 'Invalid IDP response. Please contact support.',
	[AuthErrorCodes.INVALID_MESSAGE_PAYLOAD]: 'Message payload is invalid. Please contact support.',
	[AuthErrorCodes.INVALID_MFA_SESSION]: 'Invalid MFA session.',
	[AuthErrorCodes.INVALID_OAUTH_CLIENT_ID]: 'Invalid OAuth client ID. Please contact support.',
	[AuthErrorCodes.INVALID_OAUTH_PROVIDER]: 'Invalid OAuth provider. Please contact support.',
	[AuthErrorCodes.INVALID_OOB_CODE]: 'Invalid action code.',
	[AuthErrorCodes.INVALID_ORIGIN]:
		'This domain is not authorized for sign in. Please contact support.',
	[AuthErrorCodes.INVALID_PASSWORD]: 'Password is invalid.',
	[AuthErrorCodes.INVALID_PERSISTENCE]: 'Invalid persistence type. Please contact support.',
	[AuthErrorCodes.INVALID_PHONE_NUMBER]: 'Phone number is invalid.',
	[AuthErrorCodes.INVALID_PROVIDER_ID]: 'Invalid provider ID. Please contact support.',
	[AuthErrorCodes.INVALID_RECIPIENT_EMAIL]: 'Recipient email is invalid.',
	[AuthErrorCodes.INVALID_SENDER]: 'Sender is invalid.',
	[AuthErrorCodes.INVALID_SESSION_INFO]: 'Invalid session info.',
	[AuthErrorCodes.INVALID_TENANT_ID]: 'Tenant ID is invalid. Please contact support.',
	[AuthErrorCodes.MFA_INFO_NOT_FOUND]: 'MFA info not found. Please contact support.',
	[AuthErrorCodes.MFA_REQUIRED]: 'Multi-factor authentication is required.',
	[AuthErrorCodes.MISSING_ANDROID_PACKAGE_NAME]:
		'Android package name is missing. Please contact support.',
	[AuthErrorCodes.MISSING_AUTH_DOMAIN]: 'An Auth Domain must be provided. Please contact support.',
	[AuthErrorCodes.MISSING_CODE]: 'Verification code is missing.',
	[AuthErrorCodes.MISSING_CONTINUE_URI]: 'Continue URL is missing. Please contact support.',
	[AuthErrorCodes.MISSING_IFRAME_START]:
		'The iframe must be started with startAuth. Please contact support.',
	[AuthErrorCodes.MISSING_IOS_BUNDLE_ID]: 'Missing iOS Bundle ID. Please contact support.',
	[AuthErrorCodes.MISSING_OR_INVALID_NONCE]:
		'The nonce is missing or invalid. Please contact support.',
	[AuthErrorCodes.MISSING_MFA_INFO]: 'Missing multi-factor info.',
	[AuthErrorCodes.MISSING_MFA_SESSION]: 'MFA session is missing.',
	[AuthErrorCodes.MISSING_PHONE_NUMBER]: 'Phone number is missing.',
	[AuthErrorCodes.MISSING_SESSION_INFO]: 'Session info is missing.',
	[AuthErrorCodes.MODULE_DESTROYED]:
		'The Firebase Auth SDK was already deleted, please contact support. Please contact support.',
	[AuthErrorCodes.NEED_CONFIRMATION]:
		'Account exists with different credentials. Please contact support.',
	[AuthErrorCodes.NETWORK_REQUEST_FAILED]: 'Network request failed.',
	[AuthErrorCodes.NULL_USER]: 'User is not signed in.',
	[AuthErrorCodes.NO_AUTH_EVENT]: 'No auth event was triggered.',
	[AuthErrorCodes.NO_SUCH_PROVIDER]: 'No such provider. Please contact support.',
	[AuthErrorCodes.OPERATION_NOT_ALLOWED]: 'This operation is not allowed.',
	[AuthErrorCodes.OPERATION_NOT_SUPPORTED]: 'This operation is not supported.',
	[AuthErrorCodes.POPUP_BLOCKED]: 'Popup was blocked, please disable ad blocking software.',
	[AuthErrorCodes.POPUP_CLOSED_BY_USER]:
		'The popup has been closed before finalizing the operation.',
	[AuthErrorCodes.PROVIDER_ALREADY_LINKED]: 'Provider is already linked.',
	[AuthErrorCodes.QUOTA_EXCEEDED]: 'Quota exceeded. Please contact support.',
	[AuthErrorCodes.REDIRECT_CANCELLED_BY_USER]: 'Redirect cancelled.',
	[AuthErrorCodes.REDIRECT_OPERATION_PENDING]: 'Redirect operation is pending.',
	[AuthErrorCodes.REJECTED_CREDENTIAL]: 'The credential is rejected.',
	[AuthErrorCodes.SECOND_FACTOR_ALREADY_ENROLLED]:
		'You have already enrolled in 2-step verification.',
	[AuthErrorCodes.SECOND_FACTOR_LIMIT_EXCEEDED]:
		'You have reached the maximum number of second factors.',
	[AuthErrorCodes.TENANT_ID_MISMATCH]: 'Tenant ID does not match. Please contact support.',
	[AuthErrorCodes.TIMEOUT]: 'Timeout.',
	[AuthErrorCodes.TOKEN_EXPIRED]: 'Your session has expired. Please sign in again.',
	[AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER]: 'Too many attempts. Try again later.',
	[AuthErrorCodes.UNAUTHORIZED_DOMAIN]:
		'This domain is not authorized for sign in. Please contact support.',
	[AuthErrorCodes.UNSUPPORTED_FIRST_FACTOR]:
		'First factor is not supported. Please contact support.',
	[AuthErrorCodes.UNSUPPORTED_PERSISTENCE]: 'Persistence is not supported. Please contact support.',
	[AuthErrorCodes.UNSUPPORTED_TENANT_OPERATION]: 'Tenant operation is not supported.',
	[AuthErrorCodes.UNVERIFIED_EMAIL]: 'Email is unverified.',
	[AuthErrorCodes.USER_CANCELLED]: 'You cancelled the sign in flow.',
	[AuthErrorCodes.USER_DELETED]: 'This account has been deleted.',
	[AuthErrorCodes.USER_DISABLED]: 'Your account has been disabled.',
	[AuthErrorCodes.USER_MISMATCH]:
		'The user account in the browser is different from the user account you used to start the sign in flow.',
	[AuthErrorCodes.USER_SIGNED_OUT]: 'You have been signed out.',
	[AuthErrorCodes.WEAK_PASSWORD]: 'Password should be at least 6 characters.'
};
