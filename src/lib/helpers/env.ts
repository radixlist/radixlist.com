interface Environment {
	VITE_API_KEY: string;
	VITE_AUTH_DOMAIN: string;
	VITE_PROJECT_ID: string;
	VITE_STORAGE_BUCKET: string;
	VITE_MESSAGING_SENDER_ID: string;
	VITE_APP_ID: string;
	VITE_MEASUREMENT_ID: string;
}

export const env: Environment = {
	VITE_API_KEY: (import.meta.env.VITE_API_KEY as string) ?? '',
	VITE_AUTH_DOMAIN: (import.meta.env.VITE_AUTH_DOMAIN as string) ?? '',
	VITE_PROJECT_ID: (import.meta.env.VITE_PROJECT_ID as string) ?? '',
	VITE_STORAGE_BUCKET: (import.meta.env.VITE_STORAGE_BUCKET as string) ?? '',
	VITE_MESSAGING_SENDER_ID: (import.meta.env.VITE_MESSAGING_SENDER_ID as string) ?? '',
	VITE_APP_ID: (import.meta.env.VITE_APP_ID as string) ?? '',
	VITE_MEASUREMENT_ID: (import.meta.env.VITE_MEASUREMENT_ID as string) ?? ''
};
