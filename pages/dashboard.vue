<template>
    <div>
        <h1>Dashboard</h1>
        <h2 class="warning" v-if="!isAuthenticated">You are not logged in!</h2>
    </div>
</template>

<script>
import { app } from '@/middleware/firebase'
import { getAuth } from '@firebase/auth';
import { setTitle } from '~/middleware/app';

const auth = getAuth(app);

export default {
    methods: {
        isAuthenticated() {
            return auth.currentUser !== null;
        }
    },
    mounted() {
        setTitle('dashboard');
    }
}
</script>