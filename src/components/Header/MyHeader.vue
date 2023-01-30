<template>
  <div class="bg">
    <header class="mt-24 container m-auto px-6">
      <div class="absolute z-10">
        <h1
          class="pr-6 text-7xl mt-3 font-sfera max-md:text-6xl max-md:mt-20 max-sm:text-4xl"
        >
          {{ infos.name }}
        </h1>
      </div>
      <div class="eclipse"></div>

      <div>
        <div
          class="github flex items-center justify-between font-sfera max-xl:gap-16 max-md:flex-col max-md:gap-5 max-md:mt-7"
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
          class="font-sfera flex items-center justify-center"
        >
          {{ follow }} <img v-show="x" :src="iconGithub" alt="" />
          <div role="status" v-show="spinner">
            <svg
              aria-hidden="true"
              class="inline w-5 h-5 mr-2 text-white animate-spin fill-gray-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </button>
      </div>
    </header>
    <a href="#about" class="mouse_scroll">
      <div>
        <span class="m_scroll_arrows one"></span>
        <span class="m_scroll_arrows two"></span>
        <span class="m_scroll_arrows three"></span>
      </div>
    </a>
  </div>
</template>

<script>
import api from "../../api/users/user";

export default {
  name: "MyHeader",

  data() {
    return {
      follow: "SEGUIR GITHUB",
      x: true,
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
      this.x = false;
      this.spinner = true;

      setTimeout(() => {
        window.open("https://github.com/paulopariz");

        this.follow = "SEGUIR GITHUB";
        (this.x = true), (this.spinner = false);
      }, 2000);
    },
  },
};
</script>

<style src="./MyHeader.scss" lang="scss" scoped />
