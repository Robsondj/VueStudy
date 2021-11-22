<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ photo.titulo }}</h2>

    <h2 v-if="photo._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <form @submit.prevent="save()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input name="titulo" id="titulo" autocomplete="off"
               v-model="photo.titulo"
               v-validate data-vv-rules="required|min:3|max:30"
               data-vv-as="Título"
        >
        <span class="error" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input name="url" id="url" autocomplete="off"
               v-model="photo.url"
               v-validate data-vv-rules="required|min:3"
               data-vv-as="URL"
        >
        <responsive-img v-show="photo.url" :url="photo.url" :title="photo.titulo" />
        <span class="error" v-show="errors.has('url')">{{ errors.first('url') }}</span>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea name="descricao" id="descricao" autocomplete="off"
                  v-model="photo.descricao"
                  v-validate data-vv-rules="required|min:3|max:30"
                  data-vv-as="Título"
        ></textarea>
        <span class="error" v-show="errors.has('descricao')">{{ errors.first('descricao') }}</span>
      </div>

      <div class="centralizado">
        <form-button label="GRAVAR" type="submit"/>
        <router-link :to="{name: 'home'}"><form-button label="VOLTAR" type="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ResponsiveImg from '../shared/responsive-img/ResponsiveImg.vue'
import Button from '../shared/button/Button.vue';
import Photo from '../../domain/photo/Photo';
import PhotoService from '../../domain/photo/PhotoService';

export default {

  components: {

    'responsive-img': ResponsiveImg, 
    'form-button': Button
  },

  data() {
      return {
          photo: new Photo(),
          id: this.$route.params.id
      }
  },

  methods: {
      save() {

          this.$validator
            .validateAll()
            .then(success => {
              if(success) {

                this.service
                .save(this.photo)
                .then(() => {
                  if (this.id) {
                    this.$router.push({ name: 'home'});
                  }
                  this.photo = new Photo()
                }, 
                error => console.log(error));
              }
            })
               
      }
  },

  created() {
    this.service = new PhotoService(this.$resource);

    if (this.id) {
      this.service
        .show(this.id)
        .then(photo => this.photo = photo);
    }
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

  .error {
    color: red;
  }

</style>