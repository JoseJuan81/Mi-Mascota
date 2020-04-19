<template>
  <div class="main-layout">
    <nuxt />
  </div>
</template>

<script>

export default {
  name: 'default',
};
</script>

<style>
html {
  font-family: 'Avenir', 'Helvetica Neue', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main-layout {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 30px 0;
}
</style>
