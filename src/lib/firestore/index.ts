import type { FirebaseApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import AuthHandler from './auth';
import FirestoreHandler from './firestore';

class FirestoreFactory {
	app: FirebaseApp;
	database: FirestoreHandler;
	auth: AuthHandler;

	// Private static singleton instance of Firestore
	private static _instance: FirestoreFactory;

	constructor() {
		// Initialize app
		this.app = initializeApp({
			apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
			authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
			projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
			storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
			appId: import.meta.env.VITE_FIREBASE_APP_ID,
			measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
		});

		// Register modules with the factory
		this.database = new FirestoreHandler(this.app);
		this.auth = new AuthHandler(this.app);
	}

	// Get the singleton instance of Firestore
	public static get getInstance(): FirestoreFactory {
		if (!this._instance) {
			this._instance = new FirestoreFactory();
		}

		return this._instance;
	}
}

const Instance: FirestoreFactory = FirestoreFactory.getInstance;
export default Instance;
