<template>
    <div class="body">

      <main-menu :routes="routes" />

      <transition name="page">  
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import { routes } from './routes.js';
import  Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'main-menu': Menu
  },

  data() {
    return {
      routes: routes.filter(route => route.menu)
    }
  }
}
</script>

<style>
  .body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .4s
  }
  .page-enter, .page-leave-active {
    opacity: 0
  }
</style>