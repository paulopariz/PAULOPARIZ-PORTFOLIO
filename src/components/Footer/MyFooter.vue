<template>
  <div>
    <footer class="h-40 mt-48 flex justify-between items-center px-32">
      <div class="eclipse"></div>

      <div class="flex gap-8 items-center justify-center absolute">
        <h1>Paulo Pariz © {{ moment(new Date()).format("YYYY") }}</h1>
        <h2 class="text-gray-600">Todos os direitos reservados</h2>
      </div>

      <div>
        <ul class="flex items-center gap-8">
          <a
            class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
            href=""
            >Instagram</a
          >
          <a
            class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
            href=""
            >Linkedin</a
          >
          <a
            class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
            href=""
            >E-mail</a
          >
          <a
            class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
            href=""
            >Whatsapp</a
          >
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "MyFooter",

  created() {
    this.moment = moment;
  },
};
</script>

<style src="./MyFooter.scss" lang="scss" scoped />
