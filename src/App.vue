<template>
  <div class="body">
    <h1 class="center">{{ title }}</h1>
    <ul class="photo-list">
      <li class="photo-list-item" v-for="(photo, index) of photos" :key="index">
        <my-panel :title="photo.titulo">
          <img class="responsive-img" :alt="photo.titulo" :src="photo.url">
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from './components/shared/panel/Panel.vue';

export default {

  components: {
    'my-panel': Panel
  },
  
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

<style>
  .center {
    text-align: center;
  }

  .body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .photo-list {
    list-style: none;
  }

  .photo-list .photo-list-item {
    display: inline-block;
  }

   .responsive-img {
     width: 100%;
    }
</style>