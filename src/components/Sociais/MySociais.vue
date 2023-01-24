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
  border-image: linear-gradient(
      45deg,
      rgba(8, 8, 8, 1) 10%,
      rgba(69, 37, 210, 1) 50%,
      rgba(8, 8, 8, 1) 95%
    )
    1;
  margin-bottom: 50px;

  li {
    img {
      letter-spacing: 1.4px;
    }
    img {
      opacity: 0.7;
    }
  }
}
</style>
