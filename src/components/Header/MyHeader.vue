<template>
  <div class="bg">
    <header class="mt-80 max-md:mt-44 max-sm:mt-64 max-mn:mt-56 container m-auto px-6">
      <div class="absolute z-10">
        <h1
          class="pr-6 text-7xl mt-3 font-sfera max-md:text-6xl max-md:mt-20 max-sm:text-4xl max-mn:text-3xl animate__animated animate__fadeIn animate__delay-1s"
        >
          {{ infos.name }}
        </h1>
      </div>
      <div class="eclipse"></div>

      <div>
        <div
          class="github flex items-center justify-between font-sfera max-xl:gap-16 max-md:flex-col max-md:gap-5 max-md:mt-7 max-mn:mt-2 animate__animated animate__fadeIn animate__delay-1s"
        >
          <div>
            <h2>{{ infos.followers }}</h2>
            <span>Seguidores</span>
          </div>
          <div>
            <h2>{{ infos.following }}</h2>
            <span>Seguindo</span>
          </div>
          <div>
            <h2>{{ infos.public_repos }}</h2>
            <span>Repositórios</span>
          </div>
        </div>
        <button
          @click="redirectGithub"
          class="font-sfera flex items-center justify-center animate__animated animate__fadeIn animate__delay-1s"
        >
          {{ follow }}
          <img
            v-show="iconGithubView"
            :src="iconGithub"
            alt="GitHub"
            class="animate__animated animate__flipInX animate__delay-1s"
          />
          <div v-show="spinner">
            <spinnerBtn class="-mt-1" />
          </div>
        </button>
      </div>
    </header>
    <section class="mouse_scroll animate__animated animate__fadeInUp">
      <div>
        <span class="m_scroll_arrows one"></span>
        <span class="m_scroll_arrows two"></span>
        <span class="m_scroll_arrows three"></span>
      </div>
    </section>
  </div>
</template>

<script>
import api from "../../api/users/user";
import spinnerBtn from "../spinner/spinnerBtn.vue";

export default {
  name: "MyHeader",

  components: {
    spinnerBtn,
  },

  data() {
    return {
      follow: "SEGUIR GITHUB",
      iconGithubView: true,
      iconGithub: require("../../assets/img/icongithub.svg"),
      spinner: false,
      infos: [],
    };
  },

  mounted() {
    api.list().then((response) => {
      this.infos = response.data;
    });
  },

  methods: {
    redirectGithub() {
      this.follow = "Aguarde";
      this.iconGithubView = false;
      this.spinner = true;

      setTimeout(() => {
        window.open("https://github.com/paulopariz");

        this.follow = "SEGUIR GITHUB";
        (this.iconGithubView = true), (this.spinner = false);
      }, 2000);
    },
  },
};
</script>

<style src="./MyHeader.scss" lang="scss" scoped />
