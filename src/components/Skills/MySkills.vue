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
        <div v-show="spinnerFront">
          <spinnerBtn />
        </div>
      </button>
      <button @click="clickOpenBack" class="flex items-center gap-3">
        {{ nameBtnBack }}
        <div v-show="spinnerBack">
          <spinnerBtn />
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
              <p class="leading-relaxed text-gray-500 max-sm:text-xs">
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
import spinnerBtn from "../spinner/spinnerBtn.vue";
export default {
  components: { spinnerBtn },
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
            "HTML é uma linguagem de marcação essencial para a construção de páginas na Web. Com ela, é possível estruturar e organizar o conteúdo de um site de forma clara e semântica, ",
        },
        {
          position: "02",
          icon: require("../../assets/img/iconCss.svg"),
          tech: "CSS",
          desc:
            "CSS é uma linguagem de marcação utilizada para descrever a apresentação de documentos escritos em HTML, ou seja, a aparência visual de uma página da web. O CSS permite definir o layout, as cores, as fontes e outros aspectos visuais de um site de forma separada do conteúdo em si.",
        },
        {
          position: "03",
          icon: require("../../assets/img/iconJs.svg"),
          tech: "JavaScript",
          desc:
            "JavaScript é uma linguagem de programação de alto nível originalmente criada para manipular comportamentos de páginas web e executada principalmente em navegadores.",
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
            "O Bootstrap é um framework front-end que oferece estruturas de CSS para desenvolvimento de sites e aplicações responsivas de forma rápida e descomplicada.",
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
            "O Sass (Syntactically Awesome Style Sheets) é uma linguagem que se baseia no CSS, e após ser processada, gera o código CSS correspondente.",
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
