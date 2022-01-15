<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#082E40" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#001023" />

	<style>
		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Black.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Black.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Black.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Black.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 900;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BlackItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BlackItalic.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BlackItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BlackItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 900;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Bold.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Bold.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Bold.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Bold.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 700;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BoldItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BoldItalic.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BoldItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-BoldItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 700;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBold.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBold.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBold.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBold.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 800;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBoldItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBoldItalic.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBoldItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ExtraBoldItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 800;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Italic.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Italic.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Italic.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Italic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 400;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Light.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Light.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Light.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Light.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 200;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-LightItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-LightItalic.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-LightItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-LightItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 200;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Medium.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Medium.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Medium.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Medium.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 500;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-MediumItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-MediumItalic.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-MediumItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-MediumItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 500;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Regular.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Regular.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Regular.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Regular.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 400;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Thin.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Thin.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Thin.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-Thin.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 100;
			font-display: swap;
		}

		@font-face {
			font-family: 'Alegreya Sans SC';
			src: url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ThinItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ThinItalic.woff?v=1.0') format('woff'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ThinItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/alegreya-sans-sc/AlegreyaSansSC-ThinItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 100;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-Black.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-Black.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-Black.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-Black.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 900;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-BlackItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-BlackItalic.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-BlackItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-BlackItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 900;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-Bold.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-Bold.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-Bold.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-Bold.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 700;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-BoldItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-BoldItalic.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-BoldItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-BoldItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 700;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-ExtraLight.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-ExtraLight.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-ExtraLight.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-ExtraLight.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 200;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-ExtraLightItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-ExtraLightItalic.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-ExtraLightItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-ExtraLightItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 200;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-Italic.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-Italic.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-Italic.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-Italic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 400;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-Light.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-Light.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-Light.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-Light.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 300;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-LightItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-LightItalic.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-LightItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-LightItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 300;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-Regular.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-Regular.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-Regular.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-Regular.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 400;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-SemiBold.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-SemiBold.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-SemiBold.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-SemiBold.svg#web?v=1.0') format('svg');
			font-style: normal;
			font-weight: 600;
			font-display: swap;
		}

		@font-face {
			font-family: 'Source Sans Pro';
			src: url('/fonts/source-sans-pro/SourceSansPro-SemiBoldItalic.woff2?v=1.0') format('woff2'),
				url('/fonts/source-sans-pro/SourceSansPro-SemiBoldItalic.woff?v=1.0') format('woff'),
				url('/fonts/source-sans-pro/SourceSansPro-SemiBoldItalic.ttf?v=1.0') format('truetype'),
				url('/fonts/source-sans-pro/SourceSansPro-SemiBoldItalic.svg#web?v=1.0') format('svg');
			font-style: italic;
			font-weight: 600;
			font-display: swap;
		}
	</style>
</svelte:head>

<slot />
