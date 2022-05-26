<template>
    <div>
        <h1 class="warning">⚠️ {{ error.statusCode }}</h1>
        <h2 v-if="error.statusCode === 404">oops! looks like you've landed on a page that doesn't exist... weird...</h2>
        <h2 v-else>an error occurred ({{ error.statusCode }}), please let me know more!</h2>
        <h2><NuxtLink to="/"><SpicyButton text="→ want me to take you home? ←" /></NuxtLink></h2>
    </div>
</template>

<script>
import { setTitle } from '@/middleware/app'

export default {
    props: ['error'],
    mounted() {
        setTitle('error ' + this.error.statusCode);
    }
}
</script>