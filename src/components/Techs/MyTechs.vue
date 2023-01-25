<template>
  <div class="mt-48 mb-20">
    <h1 class="font-sfera text-5xl ml-11">TECNOLOGIAS</h1>

    <div class="mt-16 flex justify-center items-center gap-24">
      <button>Front-end</button>
      <button>Back-end</button>
    </div>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="line h-full pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 font-sfera circle"
          >
            01
          </div>
          <div
            class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
          >
            <div
              class="tech flex-shrink-0 w-28 h-28 text-white rounded-full inline-flex items-center justify-center"
            >
              <img src="../../assets/img/iconHtml.svg" class="w-12" alt="" />
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">HTML</h2>
              <p class="leading-relaxed">
                HTML é uma linguagem de marcação utilizada na construção de páginas na
                Web.
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
};
</script>

<style src="./MyTechs.scss" lang="scss" scoped />
