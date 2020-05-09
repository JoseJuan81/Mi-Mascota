<template>
  <div class="routes-container">
    <button
      class="return focus:outline-none"
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
  name: 'baseMenu',
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
  @apply bg-white;
  @apply border-$primary border-r border-solid;
  height: calc(100vh - 5rem);
  height: 100vh;

  @media (min-width: 701px) {
    height: calc(100vh - 5rem);
  }

  .return {
    @apply w-full h-16 text-white bg-$primary font-bold;
    @media (min-width: 701px) {
        @apply hidden;
    }
  }

  .pet-img {
    @apply flex items-center justify-center flex-col;
    @apply border-b border-solid border-$primary pt-6 pb-8;

    img {
      height: 85px;

      @media (min-width: 600px) {
        height: 145px;
      }
    }
  }

  .routes {
    @apply p-0;
    list-style: none;

    li {
      @apply flex items-center justify-start py-0 px-8;
      @apply text-$primary font-bold text-2xl whitespace-no-wrap;
      @apply border-b border-solid border-$primary;
      @apply cursor-pointer;
      height: 42px;
      transition: all 80ms ease-in;

      &.nuxt-link-active {
        @apply bg-$primary text-white;
      }

      &:hover {
        @apply bg-$primary text-white;
      }
    }
  }
}
</style>
