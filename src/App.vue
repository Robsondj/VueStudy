<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <img :alt="photo.title" :src="photo.url">
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      photo: {
        url: "./src/assets/logo.png",
        title: "Vue photo"
      }
    }
  }
}
</script>
