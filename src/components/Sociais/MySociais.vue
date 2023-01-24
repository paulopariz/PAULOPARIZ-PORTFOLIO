<template>
  <div>
    <ul class="flex items-center justify-center gap-36 mt-28">
      <li v-for="obj in sociais" :key="obj">
        <a href="" class="flex items-center gap-6">
          <span class="font-sfera">{{ obj.rede }}</span>
          <img class="invert rotate-45 w-9" src="../../assets/img/arrow.png" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MySociais",

  data() {
    return {
      sociais: [
        {
          rede: "Instagram",
        },
        {
          rede: "Linkedin",
        },
        {
          rede: "E-mail",
        },
        {
          rede: "WhatsApp",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 45px;
  border-style: solid;
  border-right: none;
  border-left: none;
  border-width: 2px;
  border-image: linear-gradient(273deg, #080808 5%, #4525d2 50%, #080808 95%) 1;

  li {
    a {
      letter-spacing: 1.4px;
      img {
        opacity: 0.7;
      }
    }
  }
}
</style>
