<template>
  <div>
    <h1>👋hi, welcome to my testing (and training) zone</h1>
    <h2 class="warning">⚠️watch out! it's dangerous here</h2>
  </div>
</template>

<script>
import { setTitle } from '@/middleware/app'

export default {
  mounted() {
    setTitle();
  }
}
</script>