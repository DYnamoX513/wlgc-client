<template>
  <div id="app">
      <header-section></header-section>
      <router-view></router-view>
      <footer-section></footer-section>
  </div>
</template>

<script>
    import header from "@/components/header-section";
    import footer from "@/components/footer-section"

export default {
  name: 'App',
  components: {
    'header-section': header,
      'footer-section': footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
