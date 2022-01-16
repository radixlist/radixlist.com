<script lang="ts">
    import { browser } from '$app/env';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import 'firebase/compat/firestore'
    import 'firebase/compat/app';
    import firebase from "firebase/compat/app";
    let currency = null;
    let name = null;
    if (browser) {

        onMount(async () => {
            const db = firebase.firestore();
            db.collection("listings").doc("XRD").get()
                .then((doc) => {
                    let data = doc.data()
                    currency = data.currency
                    name = data.name
                })
        });
    }

</script>


<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div>
        <div class="text-xl font-medium text-black">{currency}</div>
        <p class="text-slate-500">{name}</p>
    </div>
</div>

