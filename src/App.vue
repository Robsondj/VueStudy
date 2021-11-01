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
      photos: [
        {
          url: "./src/assets/logo.png",
          title: "Vue photo"
        },
        {
          url: "https://f.hubspotusercontent30.net/hubfs/8797985/Imported_Blog_Media/17_05_-2.png",
          title: "Vue Web photo"
        }
      ]
    }
  }
}
</script>
