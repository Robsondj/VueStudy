<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="save()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off"
               @input="photo.title = $event.target.value"
               :value="photo.title"
        >
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off"
               @input="photo.url = $event.target.value"
               :value="photo.url"
        >
        <responsive-img/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off"
                  @input="photo.description = $event.target.value"
                  :value="photo.description"
        ></textarea>
      </div>

      <div class="centralizado">
        <form-button label="GRAVAR" type="submit"/>
        <router-link to="/"><form-button label="VOLTAR" type="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ResponsiveImg from '../shared/responsive-img/ResponsiveImg.vue'
import Button from '../shared/button/Button.vue';

export default {

  components: {

    'responsive-img': ResponsiveImg, 
    'form-button': Button
  },

  data() {
      return {
          photo: {
              title: '',
              url: '',
              description: ''
          }
      }
  },

  methods: {
      save() {
          console.log(this.photo);
          this.photo = {
              title: '',
              url: '',
              description: ''
          }
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

</style>