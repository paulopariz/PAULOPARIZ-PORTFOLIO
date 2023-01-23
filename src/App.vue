<template>
  <div>
    <NavBar />
    <MyHeader />

    <div class="container m-auto"></div>
  </div>
</template>

<script>
import MyHeader from "./components/Header/MyHeader.vue";
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: { NavBar, MyHeader },
};
</script>

<style lang="scss">
body {
  background-color: #080808;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  color: #fff;
}
</style>
