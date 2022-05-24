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
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(app);

export default({
    data() {
        return {
            authenticated: auth.currentUser !== null,
        }
    },
    methods: {
        authenticate() {
            signInWithPopup(auth, new GoogleAuthProvider())
                .then(() => {
                    this.authenticated = true;
                }).catch((error) => {
                    console.error(error);
                });
        },
        logout() {
            auth.signOut().then(() => {
                this.authenticated = false;
            }).catch((error) => {
                console.error(error);
            });
        },
        currentUser() {
            return auth.currentUser;
        }
    }
})
</script>