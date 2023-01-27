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
          <a href="">Instagram</a>
          <a href="">Linkedin</a>
          <a href="">E-mail</a>
          <a href="">Whatsapp</a>
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
