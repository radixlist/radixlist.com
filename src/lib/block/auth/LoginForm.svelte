<script lang="ts">
    import Input from '$lib/component/form/Input.svelte';

    let email = '';

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(email);
    };
</script>

<form
    on:submit={handleSubmit}
    class="block w-full max-w-screen-sm p-4"
>
    <Input
        type="email"
        name="email"
        label="Email"
        hideLabel={false}
        labelCornerHint="Test this"
        bind:value={email}
    >
        <svg slot="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.76858 18.0629C1.97242 19.7049 3.29888 21.0019 4.94448 21.174C7.22156 21.4119 9.58155 21.6633 12 21.6633C14.4184 21.6633 16.7784 21.4119 19.0555 21.174C20.701 21.0019 22.0275 19.7049 22.2314 18.0629C22.4748 16.1025 22.7143 14.0752 22.7143 12C22.7143 9.92475 22.4748 7.89742 22.2314 5.93707C22.0275 4.29513 20.701 2.99803 19.0555 2.826C16.7784 2.58797 14.4184 2.33664 12 2.33664C9.58155 2.33664 7.22155 2.58797 4.94448 2.826C3.29888 2.99803 1.97242 4.29513 1.76856 5.93707C1.52518 7.89742 1.28571 9.92475 1.28571 12C1.28571 14.0752 1.52518 16.1025 1.76858 18.0629Z" fill="#D7E0FF" stroke="url(#paint0_linear_2_2)" stroke-width="1.71429"/>
            <path d="M1.81641 5.49317L9.87718 11.8488C11.1222 12.8305 12.8778 12.8305 14.1228 11.8488L22.1835 5.49317" stroke="url(#paint1_linear_2_2)" stroke-width="1.71429" stroke-linejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_2_2" x1="12" y1="2.33664" x2="12" y2="21.6633" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8241D5"/>
                    <stop offset="1" stop-color="#1465E0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2_2" x1="12" y1="5.49317" x2="12" y2="12.585" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8241D5"/>
                    <stop offset="1" stop-color="#1465E0"/>
                </linearGradient>
            </defs>
        </svg>
    </Input>
</form>
