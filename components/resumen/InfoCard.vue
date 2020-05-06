<template>
  <div
    class="info-card-container flex items-center justify-start"
  >
    <div
      :class="[
          'icon flex items-center justify-center',
          { 'no-content-icon': !content },
      ]">
        <slot name="icon"></slot>
    </div>
    <h3
      :class="[
          'title',
          { 'no-content-title': !content },
      ]">{{title}}:
    </h3>
    <span class="content" v-if="content">{{content}}</span>
    <span
      v-else
      :class="[
          'content',
          { 'no-content': !content },
      ]"
    >(O.O)
    </span>
  </div>
</template>
<script>
export default {
  name: 'infoCard',
  props: {
    content: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
}
</script>
<style lang="scss" scoped>
.info-card-container {
  border-top-left-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  height: 5.5rem;
  margin: 1rem auto;
  transition: all 100ms ease-in;
  width: 21rem;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateX(0.2rem) scale(1.05);
  }

  .icon {
    @apply bg-$primary h-full;
    border-top-left-radius: 2.75rem;
    border-bottom-left-radius: 2.75rem;
    width: 3rem;

    img {
      @apply py-0 px-3;
    }

    &.no-content-icon {
        background-color: $disabled;
    }
  }

  .title {
    @apply text-$textSecondary text-2xl font-bold my-0 mx-2;

    &.no-content-title {
      color: $disabled;
    }
  }

  .content {
    @apply text-$primary font-bold text-4xl mr-4;

    &.no-content {
      color: $disabled;
    }
  }
}
</style>
