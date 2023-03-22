<template>
  <div class="mt-48 mb-20 px-6 max-sm:mt-28" id="sobre">
    <h1
      class="font-sfera text-5xl ml-11 max-md:text-4xl max-sm:text-3xl max-xl:ml-10 max-sm:ml-8 max-mn:text-2xl"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      SOBRE
    </h1>

    <section
      class="about ml-44 mt-14 max-xl:ml-0"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <div
        v-for="obj in about"
        :key="obj"
        class="flex items-center gap-5 mb-8"
        data-aos="fade-up"
      >
        <h2>{{ obj.position }}</h2>
        <p class="text-gray-500">{{ obj.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script>
// import moment from "moment";

export default {
  name: "AboutMe",

  setup() {
    const initialDate = new Date("06/01/2022");
    const currentDate = new Date();
    const milliseconds = currentDate - initialDate;
    const diffSegundos = milliseconds / 1000;
    const minutes = diffSegundos / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = Math.round(days / 30);

    const date = new Date();
    const formatDate = date.toLocaleString();

    console.log(formatDate);

    return { months };
  },

  methods: {},

  data() {
    return {
      about: [
        {
          position: "01",
          desc: "Me chamo Paulo, tenho 18 anos, sou Desenvolvedor Front-End",
        },
        {
          position: "02",
          desc: "Começei a programar há mais de " + this.months + " meses.",
        },
        {
          position: "03",
          desc: "Alguns diferenciais: VueJS, Tailwind, Sass e Laravel.",
        },
        {
          position: "04",
          desc:
            "Tenho mais experiência em front-end, mas estou constantemente buscando aprender e aprimorar minhas habilidades em Back-End.",
        },
        {
          position: "05",
          desc:
            "Atualmente, estou estudando NuxtJS para expandir ainda mais minhas habilidades, e tenho interesse em aprender NodeJS",
        },
      ],
    };
  },
};
</script>

<style src="./AboutMe.scss" lang="scss" scoped />
