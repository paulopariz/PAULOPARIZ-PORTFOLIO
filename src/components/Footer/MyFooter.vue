<template>
  <div>
    <footer
      class="h-40 mt-48 flex justify-between items-center px-32 max-md:flex-col max-md:py-4 max-sm:h-20"
    >
      <div class="eclipse"></div>

      <div
        class="flex gap-8 items-center justify-center absolute max-xl:flex-col max-xl:gap-3 max-md:gap-1"
      >
        <h1>Paulo Pariz © {{ moment(new Date()).format("YYYY") }}</h1>
        <h2 class="text-gray-600">Todos os direitos reservados</h2>
      </div>

      <div>
        <ul
          class="flex items-center gap-8 max-lg:grid max-lg:grid-cols-2 max-md:flex max-md:gap-10 max-sm:hidden"
        >
          <a
            v-for="obj in socias"
            :key="obj"
            class="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
            :href="obj.link"
            >{{ obj.name }}</a
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

  data() {
    return {
      socias: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/parizpaulo_/",
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/paulopariz/",
        },
        {
          name: "E-mail",
          link:
            "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=paulopariz01@gmail.com",
        },
        {
          name: "Whatsapp",
          link: "https://api.whatsapp.com/send?phone=5544999575376",
        },
      ],
    };
  },

  created() {
    this.moment = moment;
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500;600;700&display=swap");
@import "../../assets/scss/patter.scss";

footer {
  font-family: "Saira", sans-serif;
  border-style: solid;
  border-right: none;
  border-left: none;
  border-bottom: none;
  border-width: 2px;
  border-image: linear-gradient(273deg, #080808 5%, #4525d2 50%, #080808 95%) 1;

  .eclipse {
    @include eclipse;
    width: 230px;
    height: 100px;
    margin-top: 0;
  }

  ul {
    a {
      transition: ease 0.3s;

      &:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>
