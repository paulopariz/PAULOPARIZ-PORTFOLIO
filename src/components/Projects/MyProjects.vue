<template>
  <div class="mb-20">
    <h1 class="font-sfera text-5xl ml-11">Projetos</h1>

    <section class="grid grid-cols-3 gap-y-20 mt-16">
      <div v-for="obj in projects" :key="obj">
        <div class="w-5/6 h-80 p-8 flex justify-between flex-col project m-auto">
          <h2 class="font-sfera text-lg">{{ obj.name }}</h2>
          <p class="text-gray-600">{{ obj.desc }}</p>
          <div class="flex items-center justify-center gap-16">
            <a
              class="tooltip tooltip-primary"
              data-tip="Ver repositório"
              target="_blank"
              :href="obj.linkDeploy"
              ><img src="../../assets/img/icongithub.svg"
            /></a>

            <a
              class="tooltip tooltip-primary"
              data-tip="Ver projeto"
              target="_blank"
              :href="obj.linkGithub"
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
        },
        {
          name: "ToDo List",
          desc:
            "ToDo List desenvolvida com VueJs e Json-Server como uma API 'fake'. Podendo adicionar uma tarefa, editar, marcar como concluída e deletar.",
          linkDeploy: "https://github.com/paulopariz/ToDoList",
          linkGithub: "https://github.com/paulopariz/ToDoList",
        },
        {
          name: "app-clima-tempo",
          desc:
            "Aplicativo meteorológico que fornece o clima de várias de cidades do mundo. Usando a API OpenWeatherAPI.",
          linkDeploy: "https://github.com/paulopariz/app-clima-tempo",
          linkGithub: "https://github.com/paulopariz/app-clima-tempo",
        },
        {
          name: "redirect-links",
          desc:
            "Sistema de cadastro de links, o usuário pode editar, atualizar e deletar os links. ",
          linkDeploy: "https://github.com/paulopariz/ZCars",
          linkGithub: "https://github.com/paulopariz/ZCars",
        },
        {
          name: "Landing-Page-NFT",
          desc:
            "Landing page desenvolvida com VueJS, a base de seus componentes, com layout 100% responsivo",
          linkDeploy: "https://github.com/paulopariz/Landing-Page-NFT",
          linkGithub: "https://github.com/paulopariz/Landing-Page-NFT",
        },
        {
          name: "IMC",
          desc:
            "Calcule o seu IMC, digite seu peso e sua altura e descubra o seu IMC. Tabela disponível para saber em que classificação que você se encaixa.",
          linkDeploy: "https://github.com/paulopariz/ZCars",
          linkGithub: "https://github.com/paulopariz/ZCars",
        },
      ],
    };
  },
};
</script>

<style src="./MyProjects.scss" lang="scss" scoped />
