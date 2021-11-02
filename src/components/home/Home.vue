<template>
  <div>
    <h1 v-transform:reverse.animate="15" class="center">{{ title }}</h1>

    <input type="search" class="filter" v-on:input="filter = $event.target.value" placeholder="search for the photo title">

    <ul class="photo-list">
      <li class="photo-list-item" v-for="(photo, index) of filterPhotos" :key="index">
        <my-panel :title="photo.titulo">
          <responsive-img :title="photo.titulo" :src="photo.url" />
          <remove-button 
              label="remover" 
              type="button" 
              :confirm="true" 
              buttonStyle="danger" 
              @activeButton="remove(photo)" />
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import ResponsiveImg from '../shared/responsive-img/ResponsiveImg.vue';
import Button from '../shared/button/Button.vue';
import transform from '../../directives/Transform';

export default {

  components: {
    'my-panel': Panel,
    'responsive-img': ResponsiveImg,
    'remove-button': Button
  },
  
  data () {
    return {
      title: 'Welcome Vue.js App',
      photos: [],
      filter: ''
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos, error => console.log(error));
  },

  computed: {
    filterPhotos() {
      if(this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.photos.filter(photo => exp.test(photo.titulo));
      }
      return this.photos;
    }
  },

  methods: {
      remove(photo) {
            alert(photo.titulo);
      }
  },

  directives: {
    'transform': transform
  }
}
</script>

<style>
  .center {
    text-align: center;
  }

  .photo-list {
    list-style: none;
  }

  .photo-list .photo-list-item {
    display: inline-block;
  }

  .filter {
    display: block;
    width: 100%;
  }
</style>