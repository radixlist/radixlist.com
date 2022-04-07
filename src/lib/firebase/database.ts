import type { Firestore } from 'firebase/firestore/lite';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from './firebase';

class Database {
	private db: Firestore;

	private static _instance: Database;

	constructor() {
		this.db = getFirestore(firebase.client);
	}

	public static get getInstance(): Database {
		if (!this._instance) {
			this._instance = new Database();
		}

		return this._instance;
	}
}

export default Database.getInstance;
