<template>
  <div>
    <NavBar />

    <MyHeader />

    <MySociais />

    <div class="container m-auto">
      <AboutMe />

      <MySkills class="hidden" />

      <MyProjects class="hidden" />

      <MyContact class="hidden" />
    </div>

    <MyFooter class="hidden" />
  </div>
</template>

<script>
import AboutMe from "./components/About/AboutMe.vue";
import MyContact from "./components/Contact/MyContact.vue";
import MyFooter from "./components/Footer/MyFooter.vue";
import MyHeader from "./components/Header/MyHeader.vue";
import NavBar from "./components/NavBar/NavBar.vue";
import MyProjects from "./components/Projects/MyProjects.vue";
import MySociais from "./components/Sociais/MySociais.vue";
import MySkills from "./components/Techs/MySkills.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MyHeader,
    MySociais,
    AboutMe,
    MyProjects,
    MyContact,
    MyFooter,
    MySkills,
  },
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
