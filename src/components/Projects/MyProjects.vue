<template>
  <div class="mt-48 mb-20">
    <h1 class="font-sfera text-5xl ml-11">PROJETOS</h1>

    <section class="grid grid-cols-3 gap-y-20 mt-16">
      <div v-for="obj in projects" :key="obj">
        <div class="w-5/6 h-80 p-8 flex justify-between flex-col project m-auto">
          <div>
            <h2 class="font-sfera text-lg">{{ obj.name }}</h2>
            <span class="techs">{{ obj.techs }}</span>
          </div>

          <p class="text-gray-600">{{ obj.desc }}</p>
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
      <a target="_blank" href="https://github.com/paulopariz?tab=repositories"
        >Ver todos projetos</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects",

  data() {
    return {
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
};
</script>

<style src="./MyProjects.scss" lang="scss" scoped />
