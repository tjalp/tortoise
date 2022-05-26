<template>
  <div>
    <h1>⬇️Downloads</h1>
    <h2 class="undertitle">TAKE MY STUFF!</h2>
    <p>
      <a href="https://files.tjalp.net/mods.7z"><SpicyButton text="mods (.7z)" /></a>
      <a href="https://files.tjalp.net/mods.zip"><SpicyButton text="mods (.zip)" /></a>
    </p>
  </div>
</template>

<script>
import { setTitle } from '@/middleware/app'

export default {
  mounted() {
    setTitle('downloads');
  }
}
</script>

<style scoped>
p {
  font-size: 2rem;
}
</style>