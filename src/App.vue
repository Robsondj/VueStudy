<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(photo, index) of photos" :key="index">
        <img :alt="photo.title" :src="photo.url">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      title: 'Welcome Vue.js App',
      photos: []
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos, error => console.log(error));
  }
}
</script>
