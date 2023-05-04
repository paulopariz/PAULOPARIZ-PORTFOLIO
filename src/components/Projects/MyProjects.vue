<template>
  <section class="mt-48 mb-20 px-6 max-sm:mt-28" id="projetos">
    <h1
      class="font-sfera text-5xl ml-11 max-md:text-4xl max-sm:text-3xl max-xl:ml-10 max-sm:ml-8 max-mn:text-2xl"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      PROJETOS
    </h1>

    <section
      class="grid grid-cols-3 gap-16 mt-16 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:gap-10"
    >
      <div
        v-for="obj in projects"
        :key="obj"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="500"
      >
        <div
          class="w-full h-80 p-8 flex justify-between flex-col project m-auto max-md:justify-around"
        >
          <div>
            <h2 class="font-sfera text-lg uppercase">{{ obj.name }}</h2>
            <span class="techs uppercase">{{ obj.techs }}</span>
          </div>

          <p class="text-gray-500 max-xl:text-base max-md:text-base max-sm:text-sm">
            {{ obj.desc }}
          </p>
          <div class="flex items-center gap-12">
            <a
              class="tooltip tooltip-primary"
              data-tip="Ver repositório"
              target="_blank"
              :href="obj.linkGithub"
            >
              <img src="../../assets/img/icongithub.svg" alt="GitHub" class="w-7 h-7" />
            </a>

            <a
              class="tooltip tooltip-primary"
              data-tip="Ver projeto"
              target="_blank"
              :href="obj.linkDeploy"
            >
              <img src="../../assets/img/iconDeploy.svg" alt="Deploy" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="ViweAll">
      <button @click="redirectRepos" class="flex items-center justify-center gap-4">
        {{ ViewAll }}

        <div v-show="spinner">
          <spinnerBtn />
        </div>
      </button>
    </div>
  </section>
</template>

<script>
import spinnerBtn from "../spinner/spinnerBtn.vue";
export default {
  components: { spinnerBtn },
  name: "MyProjects",

  data() {
    return {
      ViewAll: "Ver todos projetos",
      spinner: false,
      projects: [
        {
          name: "ZCARS",
          desc:
            "O projeto Zcars é uma iniciativa pessoal de vendas de automóveis, desenvolvido com a utilização da tecnologia Laravel.",
          linkDeploy: "https://github.com/paulopariz/ZCars",
          linkGithub: "https://github.com/paulopariz/ZCars",
          techs: "JS, LARAVEL, PHP, BOOTSTRAP",
        },
        {
          name: "WORLD",
          desc:
            "Este projeto foi construído utilizando uma API para coletar dados de 250 países. É possível realizar uma pesquisa por país específico e também filtrar os resultados por região: África, Américas, Ásia, Europa e Oceania",
          linkDeploy: "https://world-paises.vercel.app/",
          linkGithub: "https://github.com/paulopariz/WORLD",
          techs: "VUE, JS, TAILWIND, API-REST",
        },
        {
          name: "QR-Scan",
          desc:
            "Com o QR-Scan, você pode criar e escanear QR Codes de forma rápida e fácil. Use-o para gerar QR Codes para suas redes sociais favoritas, como Instagram, Twitter, LinkedIn, ou mesmo para seu site pessoal.",
          linkDeploy: "https://app-qr-scan.vercel.app/",
          linkGithub: "https://github.com/paulopariz/QR-Scan",
          techs: "VUE, TAILWIND, FIGMA",
        },
        {
          name: "redirect-links",
          desc:
            "Este sistema permite que o usuário cadastre, edite, atualize e exclua links de forma fácil e eficiente.",
          linkDeploy: "https://github.com/paulopariz/redirect-links-frontend",
          linkGithub: "https://github.com/paulopariz/redirect-links-frontend",
          techs: "VUE, JS, PHP, LARAVEL, TAILWIND",
        },
        {
          name: "Page-NFT",
          desc:
            "Landing page desenvolvida com VueJS, a base de seus componentes, garantindo que o layout seja totalmente responsivo, adaptando-se perfeitamente a qualquer dispositivo.",
          linkDeploy: "https://landing-page-nft-alpha.vercel.app/",
          linkGithub: "https://github.com/paulopariz/Landing-Page-NFT",
          techs: "VUE, SASS, FIGMA",
        },
        {
          name: "Builder",
          desc:
            "Este projeto tem como objetivo ser um editor de páginas, permitindo a realização de pequenas simulações de edição.",
          linkDeploy: "https://builder-pageapp.vercel.app/",
          linkGithub: "https://github.com/paulopariz/Builder",
          techs: "JS, VUE, TAILWIND",
        },
      ],
    };
  },

  methods: {
    redirectRepos() {
      this.ViewAll = "Aguarde";
      this.spinner = true;

      setTimeout(() => {
        window.open("https://github.com/paulopariz?tab=repositories");
        this.ViewAll = "Ver todos projetos";
        this.spinner = false;
      }, 2000);
    },
  },
};
</script>

<style src="./MyProjects.scss" lang="scss" scoped />
