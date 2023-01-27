<template>
  <div class="mt-60 mb-20">
    <h1 class="font-sfera text-5xl ml-11">HABILIDADES</h1>

    <div class="mt-16 flex justify-center items-center gap-24">
      <button @click="clickOpenFront">Front-end</button>
      <button @click="clickOpenBack">Back-end</button>
    </div>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <!--TECHS FRONT-->
        <div
          v-show="openFront"
          v-for="obj in techsFront"
          :key="obj"
          class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto gap-5"
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
            class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
          >
            <div
              class="tech flex-shrink-0 w-28 h-28 inline-flex items-center justify-center"
            >
              <img :src="obj.icon" class="w-12" alt="" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium font-sfera text-gray-300 mb-1 text-xl">
                {{ obj.tech }}
              </h2>
              <p class="leading-relaxed text-gray-600">
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
          class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto gap-5"
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
            class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
          >
            <div
              class="tech flex-shrink-0 w-28 h-28 inline-flex items-center justify-center"
            >
              <img :src="obj.icon" class="w-12" alt="" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium font-sfera text-gray-300 mb-1 text-xl">
                {{ obj.tech }}
              </h2>
              <p class="leading-relaxed text-gray-600">
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
      this.openFront = true;
      this.openBack = false;
    },
    clickOpenBack() {
      this.openBack = true;
      this.openFront = false;
    },
  },
};
</script>

<style src="./MySkills.scss" lang="scss" scoped />
