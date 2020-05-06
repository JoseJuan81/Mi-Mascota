<template>
  <div>
    <nav class="nav">
      <h1 class="logo-app">MascotApp</h1>
        <div>
          <router-link :to="switchLocalePath('en')">EN</router-link>
          <router-link :to="switchLocalePath('es')">ES</router-link>
        </div>
    </nav>
    <div class="activator">
      <button
        type="button"
        @click="show = true"
      >Menu</button>
    </div>
    <client-only placeholder="Cargando...">
      <user-profile-layout
        :break-point="600"
        :show="show"
      >
        <template v-slot:aside>
          <base-menu :menu-items="menuItems" />
        </template>
        <template v-slot:menu-movil>
          <base-menu :menu-items="menuItems" @click="show = false"/>
        </template>
        <template v-slot:main-content>
          <div class="main-content-container">
            <nuxt />
          </div>
        </template>
      </user-profile-layout>
    </client-only>
  </div>
</template>
<script>
import baseMenu from '~/components/BaseMenu.vue';

function data () {
  return {
    menuItems: [
      { title: this.$t('summary'), route: this.localePath('resumen') },
      { title: this.$t('vaccines'), route: this.localePath('mis-vacunas') },
      { title: this.$t('record'), route: this.localePath('mi-historia') },
      { title: this.$t('treatment'), route: this.localePath('mis-medicinas') },
      { title: this.$t('ecommerce'), route: this.localePath('mis-accesorios') },
      { title: this.$t('appointments'), route: this.localePath('mis-consultas') },
    ],
    show: false,
  };
}

export default {
  name: 'mainLayout',
  components: {
    baseMenu,
  },
  data,
  head () {
    return {
      script: [
        { src: 'https://d3js.org/d3.v4.min.js' },
        { src: 'https://d3js.org/d3-color.v1.min.js' },
        { src: 'https://d3js.org/d3-interpolate.v1.min.js' },
        { src: 'https://d3js.org/d3-scale-chromatic.v1.min.js' },
      ],
    };
  },
};
</script>
<style lang="scss">
.nav {
  @apply border-b border-$primary border-solid py-2 px-12;
  @apply flex items-center justify-between;
  height: $navHeight;

  .logo-app {
    @apply text-4xl text-$primary font-bold;
  }
}

.activator {
  @apply block;

  @media (min-width: 599px) {
    @apply hidden;
  }
}

.main-content-container {
  @apply py-0 px-8 border-l border-$primary border-solid;
  height: calc(100vh - 5rem);
}
</style>
