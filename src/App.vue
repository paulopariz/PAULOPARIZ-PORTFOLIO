<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style lang="scss">
body {
  background-color: #0d1117;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  color: #fff;
}
</style>
