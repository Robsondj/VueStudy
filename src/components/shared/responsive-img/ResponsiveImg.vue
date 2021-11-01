<template>
    <img class="responsive-img" :alt="title" :src="url">    
</template>

<script>
export default {
    
    props: ['url', 'title']
}
</script>

<style scoped>
  .responsive-img {
    width: 100%;
  }
</style>