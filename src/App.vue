<template>
  <div v-show="loading">
    <MyLoading />
  </div>

  <div v-show="content" class="animate__animated animate__fadeIn">
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
import AOS from "aos";
import AboutMe from "./components/About/AboutMe.vue";
import MyContact from "./components/Contact/MyContact.vue";
import MyFooter from "./components/Footer/MyFooter.vue";
import MyHeader from "./components/Header/MyHeader.vue";
import NavBar from "./components/NavBar/NavBar.vue";
import MyProjects from "./components/Projects/MyProjects.vue";
import MySociais from "./components/Sociais/MySociais.vue";
import MySkills from "./components/Skills/MySkills.vue";
import MyLoading from "./components/Loading/MyLoading.vue";

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
    MyLoading,
  },

  data() {
    return {
      loading: true,
      content: false,
    };
  },

  mounted() {
    AOS.init();
  },

  created: function () {
    setTimeout(() => {
      this.loading = false;

      this.content = true;
    }, 5500);
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
  ::selection {
    background: #4525d2;
    color: #fff;
  }
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
</style>
