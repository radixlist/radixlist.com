import type { Firestore } from 'firebase/firestore';
import type { FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default class FirestoreHandler {
	private readonly firestore: Firestore;

	constructor(app: FirebaseApp) {
		this.firestore = getFirestore(app);
	}
}
