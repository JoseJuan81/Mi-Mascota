<template>
    <div>
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
            { title: this.$t('summary'), route: '/resumen' },
            { title: this.$t('vaccines'), route: '/mis-vacunas' },
            { title: this.$t('record'), route: '/mi-historia' },
            { title: this.$t('treatment'), route: '/mis-medicinas' },
            { title: this.$t('ecommerce'), route: '/mis-accesorios' },
            { title: this.$t('appointments'), route: '/mis-consultas' },
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
};
</script>
<style lang="scss">
.activator {
    display: block;

    @media (min-width: 599px) {
        display: none;
    }
}

.main-content-container {
    border-left: 1px solid $primary;
    height: auto;
    padding: 0 20px;

    @media (max-width: 600px) {
        border-left: 0px solid $primary;
    }
}
</style>