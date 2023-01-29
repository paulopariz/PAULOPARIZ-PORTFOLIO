<template>
  <nav class="container m-auto flex items-center justify-between py-9 px-6">
    <div><p class="hidden">P</p></div>
    <ul class="font-sfera flex items-center gap-14 max-lg:gap-9">
      <a
        v-for="obj in nav"
        :key="obj"
        class="relative max-md:hidden before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
        href=""
        >{{ obj.name }}</a
      >

      <div class="md:hidden z-40 absolute">
        <label class="swap">
          <input @click="openMenu" type="checkbox" />
          <div class="swap-on -ml-16 max-sm:-ml-20">FECHAR</div>
          <div class="swap-off -ml-14 max-sm:-ml-16">MENU</div>
        </label>
      </div>
    </ul>
  </nav>
  <div v-show="menu" class="menu w-full -mt-16 h-full absolute z-30">
    <div class="m-auto flex h-96 flex-col justify-between">
      <a v-for="obj in nav" :key="obj" class="font-sfera text-5xl" href="">
        {{ obj.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      menu: false,

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

  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Saira:wght@200;300;400;500;600;700;800;900&display=swap");
@import "../../assets/scss/patter.scss";

nav {
  ul {
    a {
      font-size: 14px;
      transition: ease 0.3s;
      &:hover {
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 1026px) {
    ul {
      a {
        font-size: 12px;
      }
    }
  }
}
.menu {
  background-color: #080808;
}
</style>
