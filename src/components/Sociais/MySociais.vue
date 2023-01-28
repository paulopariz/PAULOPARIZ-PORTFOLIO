<template>
  <div>
    <ul
      class="flex items-center justify-center gap-36 mt-28 max-xl:gap-24 max-lg:gap-16 max-md:grid max-md:grid-cols-2 max-md:place-items-center max-sm:grid-cols-1 max-sm:place-items-start max-sm:gap-8"
    >
      <li v-for="obj in sociais" :key="obj">
        <a href="" class="flex items-center gap-6 max-lg:gap-2">
          <span
            class="font-sfera relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100 max-lg:text-xs"
            >{{ obj.rede }}</span
          >
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
      transition: ease 0.3s;

      &:hover {
        opacity: 0.9;
      }
      img {
        opacity: 0.7;
      }
    }
  }
}
</style>
