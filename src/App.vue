<template>
  <div id="app">
      <header-section></header-section>
      <transition name ="fade">
          <div class="wrapper">
              <router-view></router-view>
          </div>
      </transition>
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
    },
    mounted(){
        this.$store.dispatch("getAllFromStorageFun")
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
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
