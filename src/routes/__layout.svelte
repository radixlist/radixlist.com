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

<div class="bg-gray-50 overflow-hidden flex flex-col min-h-screen transition-colors duration-300">
	<header class="flex justify-center bg-blue-50 font-alegreya-sans-sc">
		<div class="w-full max-w-screen-xl">
			<div class="py-2 border-b border-gray-400 flex justify-between">
				<div>Your initiatives</div>
				<div>Your account</div>
			</div>
			<div class="py-6 flex justify-between">
				<div class="flex items-center gap-4 text-3xl tracking-wider">
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9 9L5 5V43L9 47H43V9H9Z" fill="white" />
						<path d="M9 47L7 45L43 9V47H9Z" fill="#BBD8FF" />
						<path
							d="M43 1H9L5 5M5 5L9 9H43V47H9L5 43V5ZM12 5H41M3 15H7M3 21H7M3 27H7M3 33H7M3 39H7"
							stroke="#1F2937"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M21.5912 37.9933C21.3849 37.9931 21.1816 37.9427 20.9979 37.846C20.8142 37.7494 20.6554 37.6093 20.5343 37.4372L15.3688 30.0657H12V27.3825H16.0352C16.2415 27.3823 16.4449 27.4326 16.6286 27.5292C16.8124 27.6259 16.9712 27.7662 17.092 27.9385L21.3132 33.9642L27.7543 18.7999C27.8563 18.5607 28.0237 18.3572 28.236 18.2143C28.4484 18.0715 28.6965 17.9954 28.9501 17.9954H37V20.687H29.8025L22.787 37.195C22.6945 37.4121 22.5481 37.6002 22.3626 37.7403C22.177 37.8804 21.9589 37.9677 21.7302 37.9933C21.6852 37.9933 21.6382 37.9933 21.5912 37.9933Z"
							fill="#1F2937"
						/>
					</svg>
					<h2>Radix List</h2>
				</div>
				<div class="flex items-center">
					<a href="/" class="underline"> Menu </a>
				</div>
			</div>
		</div>
	</header>

	<div class="flex-grow">
		<slot />
	</div>
	<footer>Footer</footer>
</div>
