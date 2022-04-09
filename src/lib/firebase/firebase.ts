import type { FirebaseApp, FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { env } from '$lib/helpers/env';

class Firebase {
	client: FirebaseApp;

	private static _instance: Firebase;

	constructor() {
		const firebaseConfig: FirebaseOptions = {
			apiKey: env.VITE_API_KEY,
			authDomain: env.VITE_AUTH_DOMAIN,
			projectId: env.VITE_PROJECT_ID,
			storageBucket: env.VITE_STORAGE_BUCKET,
			messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
			appId: env.VITE_APP_ID,
			measurementId: env.VITE_MEASUREMENT_ID
		};
		this.client = initializeApp(firebaseConfig);
	}

	public static get getInstance(): Firebase {
		if (!this._instance) {
			this._instance = new Firebase();
		}

		return this._instance;
	}
}

export default Firebase.getInstance as Firebase;
