<template>
  <nav class="-mt-24 float-right">
    <ul class="flex items-center gap-28 py-3 px-32 font-sfera">
      <a
        v-for="obj in nav"
        :key="obj"
        class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
        href=""
        >{{ obj.name }}</a
      >
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      nav: [
        {
          name: "SOBRE",
        },
        {
          name: "HABILIDADES",
        },
        {
          name: "PROJETOS",
        },
        {
          name: "CONTATO",
        },
      ],
    };
  },
};
</script>

<style src="./NavBar.scss" lang="scss" />
