<template>
  <div class="mt-48 mb-20">
    <h1 class="font-sfera text-5xl ml-11">TECNOLOGIAS</h1>

    <div class="mt-16 flex justify-center items-center gap-24">
      <button>Front-end</button>
      <button>Back-end</button>
    </div>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div
          v-for="obj in techsFront"
          :key="obj"
          class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
        >
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="line h-full pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-8 h-8 -ml-1 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 font-sfera circle"
          >
            {{ obj.position }}
          </div>
          <div
            class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
          >
            <div
              class="tech flex-shrink-0 w-28 h-28 rounded-full inline-flex items-center justify-center"
            >
              <img :src="obj.icon" class="w-12" alt="" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-300 mb-1 text-xl">
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
    };
  },
};
</script>

<style src="./MyTechs.scss" lang="scss" scoped />
