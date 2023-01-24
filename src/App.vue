<template>
  <div>
    <NavBar />

    <MyHeader />

    <MySociais />

    <div class="container m-auto">
      <AboutMe />

      <MyTechs />
    </div>
  </div>
</template>

<script>
import AboutMe from "./components/About/AboutMe.vue";
import MyHeader from "./components/Header/MyHeader.vue";
import NavBar from "./components/NavBar/NavBar.vue";
import MySociais from "./components/Sociais/MySociais.vue";
import MyTechs from "./components/Techs/MyTechs.vue";

export default {
  name: "App",
  components: { NavBar, MyHeader, MySociais, AboutMe, MyTechs },
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
