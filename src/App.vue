<template>
  <div>
    <NavBar />

    <MyHeader />

    <MySociais />

    <div class="container m-auto">
      <AboutMe />

      <MySkills />

      <MyProjects />

      <MyContact />
    </div>

    <MyFooter />
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
import MySkills from "./components/Skills/MySkills.vue";

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

* {
  scrollbar-width: thin;
  scrollbar-color: #1e1e1e #080808;
  scroll-behavior: smooth;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #080808;
}

*::-webkit-scrollbar-thumb {
  background-color: #1e1e1e;
  border-radius: 20px;
  border: 3px solid #080808;
}
</style>
