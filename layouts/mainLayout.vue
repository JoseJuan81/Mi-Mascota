<template>
  <div>
    <nav class="nav">
      <h1 class="logo-app">MascotApp</h1>
        <div>
          <router-link :to="switchLocalePath('en')">EN</router-link>
          <router-link :to="switchLocalePath('es')">ES</router-link>
        </div>
    </nav>
    <client-only placeholder="Cargando...">
      <div class="max-width">
        <div class="activator">
          <button
            class="flex items-center justify-center w-12 h-12 ml-8 mt-4 focus:outline-none"
            type="button"
            @click="show = true"
          >
            <menu-icon class="menu h-full w-full" />
          </button>
        </div>
        <user-profile-layout
          :break-point="700"
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
      </div>
    </client-only>
  </div>
</template>
<script>
import baseMenu from '~/components/BaseMenu.vue';
import menuIcon from '~/components/shared/icons/menuIcon.vue';

function data () {
  return {
    menuItems: [
      { title: this.$t('summary'), route: this.localePath('resumen') },
      { title: this.$t('vaccines.title'), route: this.localePath('mis-vacunas') },
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
    menuIcon,
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
.dl-aside-container {
  flex-basis: 19% !important;
}

.max-width {
  @apply max-w-mascotapp mx-auto;
}
.nav {
  @apply max-w-mascotapp border-b border-$primary border-solid py-2 px-12;
  @apply flex items-center justify-between mx-auto;
  height: $navHeight;

  .logo-app {
    @apply text-4xl text-$primary font-bold;
  }
}

.activator {
  @apply block;

  [data-color="menu"] {
    @apply fill-$primary;
  }

  @media (min-width: 701px) {
    @apply hidden;
  }
}

.main-content-container {
  @apply py-0 px-8;
}
</style>
