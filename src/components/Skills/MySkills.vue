<template>
  <div class="mt-60 mb-20 px-6 max-sm:mt-36" id="habilidades">
    <h1
      class="font-sfera text-5xl ml-11 max-md:text-4xl max-sm:text-3xl max-xl:ml-10 max-sm:ml-8 max-mn:text-2xl"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      HABILIDADES
    </h1>

    <div
      class="mt-16 flex justify-center items-center gap-24 max-sm:gap-8 max-mn:gap-2 max-mn:flex-col"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <button @click="clickOpenFront" class="flex items-center gap-9">
        {{ nameBtnFront }}
        <div role="status" v-show="spinnerFront">
          <svg
            aria-hidden="true"
            class="inline w-4 h-4 mr-2 text-white animate-spin fill-gray-500"
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
      <button @click="clickOpenBack" class="flex items-center gap-3">
        {{ nameBtnBack }}
        <div role="status" v-show="spinnerBack">
          <svg
            aria-hidden="true"
            class="inline w-4 h-4 mr-2 text-white animate-spin fill-gray-500"
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

    <section class="text-gray-600 body-font">
      <div class="container py-24 mx-auto flex flex-wrap">
        <!--TECHS FRONT-->
        <div
          v-show="openFront"
          v-for="obj in techsFront"
          :key="obj"
          class="flex relative pt-10 pb-20 max-sm:pb-12 sm:items-center w-9/12 max-md:w-full max-md:text-sm mx-auto gap-5 max-xl:mx-0 max-xl:w-full animate__animated animate__fadeIn"
        >
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="line h-full pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-8 h-8 -ml-1 mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 font-sfera circle"
          >
            <span>{{ obj.position }}</span>
          </div>
          <div
            class="flex-grow md:pl-8 max-sm:pl-2 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
            data-aos="fade-up"
          >
            <div
              class="tech flex-shrink-0 w-28 h-28 inline-flex items-center justify-center"
            >
              <img :src="obj.icon" class="w-12" alt="" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2
                class="font-medium font-sfera text-gray-300 mb-1 text-xl max-sm:text-base"
              >
                {{ obj.tech }}
              </h2>
              <p class="leading-relaxed text-gray-600 max-sm:text-xs">
                {{ obj.desc }}
              </p>
            </div>
          </div>
        </div>

        <!--TECHS BACK-->
        <div
          v-show="openBack"
          v-for="obj in techsBack"
          :key="obj"
          class="flex relative pt-10 pb-20 max-sm:pb-12 sm:items-center w-9/12 max-md:w-full max-md:text-sm mx-auto gap-5 max-xl:mx-0 max-xl:w-full animate__animated animate__fadeIn"
        >
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="line h-full pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-8 h-8 -ml-1 mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 font-sfera circle"
          >
            <span>{{ obj.position }}</span>
          </div>
          <div
            class="flex-grow md:pl-8 max-sm:pl-2 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
          >
            <div
              class="tech flex-shrink-0 w-28 h-28 inline-flex items-center justify-center"
            >
              <img :src="obj.icon" class="w-12" alt="" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2
                class="font-medium font-sfera text-gray-300 mb-1 text-xl max-sm:text-base"
              >
                {{ obj.tech }}
              </h2>
              <p class="leading-relaxed text-gray-600 max-sm:text-xs">
                {{ obj.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyTechs",

  data() {
    return {
      openFront: true,
      openBack: false,

      spinnerFront: false,
      spinnerBack: false,

      nameBtnFront: "FRONT-END",
      nameBtnBack: "BACK-END",

      techsFront: [
        {
          position: "01",
          icon: require("../../assets/img/iconHtml.svg"),
          tech: "HTML",
          desc:
            "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
        },
        {
          position: "02",
          icon: require("../../assets/img/iconCss.svg"),
          tech: "CSS",
          desc:
            "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML.",
        },
        {
          position: "03",
          icon: require("../../assets/img/iconJs.svg"),
          tech: "JavaScript",
          desc:
            "JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.",
        },
        {
          position: "04",
          icon: require("../../assets/img/iconVue.svg"),
          tech: "VueJS",
          desc:
            "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
        },
        {
          position: "05",
          icon: require("../../assets/img/iconBootstrap.svg"),
          tech: "Bootstrap",
          desc:
            "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.",
        },
        {
          position: "06",
          icon: require("../../assets/img/iconTailwind.svg"),
          tech: "Tailwindcss",
          desc:
            "Assim como o Boostrap, Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta. Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente.",
        },
        {
          position: "07",
          icon: require("../../assets/img/iconSass.svg"),
          tech: "SASS",
          desc:
            "O Sass(Syntactically awesome style sheets) é uma linguagem baseada no CSS, que depois de processada gera CSS.",
        },
        {
          position: "08",
          icon: require("../../assets/img/iconGit.svg"),
          tech: "GIT",
          desc:
            "Git é um sistema de controle de versão open-source. Ele é utilizado para a criação de um histórico de alterações em código-fonte de projetos de desenvolvimento de software.",
        },
      ],

      techsBack: [
        {
          position: "01",
          icon: require("../../assets/img/iconPhp.svg"),
          tech: "PHP",
          desc:
            "PHP é uma linguagem de programação voltada para o desenvolvimento de aplicações para a web e para criar sites, favorecendo a conexão entre os servidores e a interface do usuário.",
        },
        {
          position: "02",
          icon: require("../../assets/img/iconLaravel.svg"),
          tech: "Laravel",
          desc:
            "Laravel é um framework PHP gratuito e de código aberto, utilizado no desenvolvimento de sistemas para web.",
        },
        {
          position: "03",
          icon: require("../../assets/img/iconMysql.svg"),
          tech: "MySql",
          desc:
            "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.",
        },
      ],
    };
  },

  methods: {
    clickOpenFront() {
      this.nameBtnFront = "";
      this.spinnerFront = true;

      setTimeout(() => {
        this.openFront = true;
        this.openBack = false;
        this.spinnerFront = false;
        this.nameBtnFront = "FRONT-END";
      }, 1000);
    },

    clickOpenBack() {
      this.nameBtnBack = "";
      this.spinnerBack = true;

      setTimeout(() => {
        this.openBack = true;
        this.openFront = false;
        this.spinnerBack = false;
        this.nameBtnBack = "BACK-END";
      }, 1000);
    },
  },
};
</script>

<style src="./MySkills.scss" lang="scss" scoped />
