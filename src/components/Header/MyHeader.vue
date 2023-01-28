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
        <a href="https://github.com/paulopariz" class="font-sfera">
          SEGUIR GITHUB <img src="../../assets/img/icongithub.svg" alt="" />
        </a>
      </div>
    </header>
    <div class="mouse_scroll">
      <div>
        <span class="m_scroll_arrows one"></span>
        <span class="m_scroll_arrows two"></span>
        <span class="m_scroll_arrows three"></span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api/users/user";

export default {
  name: "MyHeader",

  data() {
    return {
      infos: [],
    };
  },

  mounted() {
    api.list().then((response) => {
      this.infos = response.data;
    });
  },
};
</script>

<style src="./MyHeader.scss" lang="scss" scoped />
