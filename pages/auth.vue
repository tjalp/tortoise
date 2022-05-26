<template>
    <div>
        <h1>🧍Authentication</h1>
        <h2 class="undertitle">let me know who you are (and maybe unlock some stuff) :)</h2>
        <h2 @click="authenticate" v-if="!authenticated">
            <SpicyButton text="Authenticate" />
        </h2>
        <h2 @click="logout" v-else>
            <SpicyButton :text="'Logout (logged in as ' + currentUser().displayName + ')'" />
        </h2>
    </div>
</template>

<script>
import { app } from '@/middleware/firebase'
import { setTitle } from '@/middleware/app'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth'

const auth = getAuth(app);

export default {
    data() {

        onAuthStateChanged(auth, () => {
            this.authenticated = auth.currentUser !== null;
        });

        return {
            authenticated: auth.currentUser !== null
        }
    },
    methods: {
        authenticate() {
            signInWithRedirect(auth, new GoogleAuthProvider());
        },
        logout() {
            auth.signOut().then(() => {
                this.authenticated = false;
            }).catch((error) => {
                console.error(error);
            });
        },
        currentUser() {
            if (auth.currentUser == null) return "???";
            return auth.currentUser;
        }
    },
    mounted() {
        setTitle('auth');
    }
}
</script>