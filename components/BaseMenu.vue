<template>
    <div class="routes-container">
        <button
            class="return"
            type="button"
            @click="$emit('click')"
        >Regresar</button>
        <div class="pet-img">
            <img src="~/static/icons/pets/dog.svg" alt="pet-img">
            <small>Catire</small>
            <small>ID: 1a2b3c</small>
        </div>
        <ul class="routes">
            <nuxt-link
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.route"
                tag="li"
            >{{item.title}}</nuxt-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'base-menu',
    props: {
        menuItems: {
            required: true,
            type: Array,
        },
    },
};
</script>
<style lang="scss" scoped>
.routes-container {
    background-color: white;
    height: 100vh;

    .return {

        @media (min-width: 600px) {
            display: none;
        }
    }

    .pet-img {
        align-items: center;
        border-bottom: 1px solid $primary;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 30px;
        padding-bottom: 20px;

        img {
            height: 85px;

            @media (min-width: 600px) {
                height: 145px;
            }
        }
    }

    .routes {
        list-style: none;
        padding: 0px;

        li {
            align-items: center;
            border-bottom: 1px solid $primary;
            color:$primary;
            cursor: pointer;
            display: flex;
            font-weight: bold;
            height: 42px;
            justify-content: flex-start;
            padding: 0 20px;
            transition: all 80ms ease-in;
            white-space: nowrap;

            &.nuxt-link-exact-active {
                background-color: $primary;
                color: white;
            }

            &:hover {
                background-color: $primary;
                color: white;
                background-color: $primary;
                color: white;
            }
        }
    }
}
</style>