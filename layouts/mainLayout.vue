<template>
    <div>
        <nav class="nav flex space-between items-center">
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

function data() {
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
    name: 'main-layout',
    components: {
        baseMenu,
    },
    data,
    head() {
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
    border-bottom: 0.1rem solid $primary;
    height: $navHeight;
    padding: 0.5rem 3rem;

    .logo-app {
        color: $primary;
        font-size: 2.2rem;
    }
}

.activator {
    display: block;

    @media (min-width: 599px) {
        display: none;
    }
}

.main-content-container {
    border-left: 0.1rem solid $primary;
    height: calc(100vh - 5rem);
    padding: 0 2rem;

    @media (max-width: 600px) {
        border-left: 0rem solid $primary;
    }
}
</style>