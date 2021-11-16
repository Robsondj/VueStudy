<template>
  <div>
    <h1 v-transform:reverse.animate="15" class="center">{{ title }}</h1>

    <p v-show="message" class="centralizado">{{ message }}</p>

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
import PhotoService from '../../domain/photo/PhotoService';

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
      filter: '',
      message: ''
    }
  },

  created() {

    this.service = new PhotoService(this.$resource);

    this.service
      .list()
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
        this.service
          .delete(photo._id)
          .then(
            () => {
            this.message = 'Foto removida com sucesso';
            let index = this.photos.indexOf(photo);
            this.photos.splice(index, 1);
          }, 
          err => {
            this.message = 'Não foi possível remover a foto';
            console.log(err);
          }
        )
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