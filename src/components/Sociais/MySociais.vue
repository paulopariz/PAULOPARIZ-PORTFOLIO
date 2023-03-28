<template>
  <div>
    <ul
      class="flex items-center justify-center gap-36 mt-28 max-xl:gap-24 max-lg:gap-16 max-md:grid max-md:grid-cols-2 max-md:place-items-center max-sm:grid-cols-1 max-sm:place-items-start max-sm:gap-8 max-sm:mt-40"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <li
        v-for="obj in sociais"
        :key="obj"
        class="max-sm:container max-sm:m-auto max-sm:px-6"
      >
        <a target="_blank" :href="obj.link" class="flex items-center gap-6 max-lg:gap-2">
          <span
            class="font-sfera relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100 max-lg:text-xs"
            >{{ obj.rede }}</span
          >
          <img class="invert max-sm:w-7" src="../../assets/img/arrow.svg" alt="Arrow" />
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
          link: "https://www.instagram.com/parizpaulo_/",
        },
        {
          rede: "Linkedin",
          link: "https://www.linkedin.com/in/paulopariz/",
        },
        {
          rede: "E-mail",
          link:
            "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=paulopariz01@gmail.com",
        },
        {
          rede: "WhatsApp",
          link: "https://api.whatsapp.com/send?phone=5544999575376",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/patter.scss";

ul {
  padding: 45px;
  border-style: solid;
  border-right: none;
  border-left: none;
  border-width: 2px;
  border-image: linear-gradient(
      273deg,
      $background 5%,
      $primary-color 50%,
      $background 95%
    )
    1;

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

  @media (max-width: 642px) {
    padding: 35px 24px;
  }
}
</style>
