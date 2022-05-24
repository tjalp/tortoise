<template>
    <a class="spicy-button">{{ text }}</a>
</template>

<script>
export default({
    props: {
        text: {
            type: String,
            default: 'you didnt enter any text you twat'
        }
    }
})
</script>

<style>
.spicy-button {
  background-color: #303030;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.25rem;
}
</style>