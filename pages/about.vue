<template>
  <div>
    <h1>ℹ️This is the about page</h1>
    <h2 class="undertitle">There's literally nothing to see here</h2>
  </div>
</template>

<script>
import { setTitle } from '@/middleware/app'

export default {
  mounted() {
    setTitle('about');
  }
}
</script>