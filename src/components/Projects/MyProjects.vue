<template>
  <div class="mt-48 mb-20 px-6 max-sm:mt-28" id="projetos">
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
            <h2 class="font-sfera text-lg">{{ obj.name }}</h2>
            <span class="techs">{{ obj.techs }}</span>
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
              ><img src="../../assets/img/icongithub.svg"
            /></a>

            <a
              class="tooltip tooltip-primary"
              data-tip="Ver projeto"
              target="_blank"
              :href="obj.linkDeploy"
              ><img src="../../assets/img/iconDeploy.svg"
            /></a>
          </div>
        </div>
      </div>
    </section>

    <div class="ViweAll">
      <button @click="redirectRepos" class="flex items-center justify-center gap-4">
        {{ ViewAll }}

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
  </div>
</template>

<script>
export default {
  name: "MyProjects",

  data() {
    return {
      ViewAll: "Ver todos projetos",
      spinner: false,
      projects: [
        {
          name: "ZCARS",
          desc:
            "Zcars é um projeto pessoal de venda de carros, feito especialmente com Laravel.",
          linkDeploy: "https://github.com/paulopariz/ZCars",
          linkGithub: "https://github.com/paulopariz/ZCars",
          techs: "JS, LARAVEL, PHP, BOOTSTRAP",
        },
        {
          name: "ToDo List",
          desc:
            "ToDo List desenvolvida com VueJs e Json-Server como uma API 'fake'. Podendo adicionar uma tarefa, editar, marcar como concluída e deletar.",
          linkDeploy: "https://github.com/paulopariz/ToDoList",
          linkGithub: "https://github.com/paulopariz/ToDoList",
          techs: "VUE, VUEX, JS, TAILWIND",
        },
        {
          name: "app-clima-tempo",
          desc:
            "Aplicativo meteorológico que fornece o clima de várias de cidades do mundo. Usando a API OpenWeatherAPI.",
          linkDeploy: "https://app-clima-tempo-ten.vercel.app/",
          linkGithub: "https://github.com/paulopariz/app-clima-tempo",
          techs: "HTML, CSS, JS",
        },
        {
          name: "redirect-links",
          desc:
            "Sistema de cadastro de links, o usuário pode editar, atualizar e deletar os links. ",
          linkDeploy: "https://github.com/paulopariz/redirect-links-frontend",
          linkGithub: "https://github.com/paulopariz/redirect-links-frontend",
          techs: "VUE, JS, PHP, LARAVEL, TAILWIND",
        },
        {
          name: "Landing-Page-NFT",
          desc:
            "Landing page desenvolvida com VueJS, a base de seus componentes, com layout 100% responsivo",
          linkDeploy: "https://landing-page-nft-alpha.vercel.app/",
          linkGithub: "https://github.com/paulopariz/Landing-Page-NFT",
          techs: "VUE, SASS, FIGMA",
        },
        {
          name: "IMC",
          desc:
            "Calcule o seu IMC, digite seu peso e sua altura e descubra o seu IMC. Tabela disponível para saber em que classificação que você se encaixa.",
          linkDeploy: "https://imc-rosy.vercel.app/",
          linkGithub: "https://github.com/paulopariz/IMC",
          techs: "JS, VUE, BOOTSTRAP",
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
