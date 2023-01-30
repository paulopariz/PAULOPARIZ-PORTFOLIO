<template>
  <div class="mt-48 mb-20 px-6 max-sm:mt-28" id="about" data-aos="flip-left">
    <h1
      class="font-sfera text-5xl ml-11 max-md:text-4xl max-sm:text-3xl max-xl:ml-10 max-sm:ml-8"
    >
      SOBRE
    </h1>

    <section class="about ml-44 mt-14 max-xl:ml-0">
      <div v-for="obj in about" :key="obj" class="flex items-center gap-5 mb-8">
        <h2>{{ obj.position }}</h2>
        <p class="text-gray-600">{{ obj.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutMe",

  data() {
    return {
      about: [
        {
          position: "01",
          desc: "Me chamo Paulo, tenho 18 anos.",
        },
        {
          position: "02",
          desc: "Estudo programação há mais de 7 meses.",
        },
        {
          position: "03",
          desc: "Alguns diferenciais: VueJS, Tailwind, Sass e Laravel.",
        },
        {
          position: "04",
          desc:
            "Tenho mais experiência com front-end e sempre busco aprimorar o back-end.",
        },
      ],
    };
  },
};
</script>

<style src="./AboutMe.scss" lang="scss" scoped />
