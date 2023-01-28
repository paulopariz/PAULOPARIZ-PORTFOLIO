<template>
  <nav class="flex justify-between py-8 px-32 max-xl:px-20 max-lg:px-14 max-sm:px-6">
    <div><p class="hidden">P</p></div>
    <ul class="flex items-center gap-20 font-sfera max-xl:gap-14 max-lg:gap-7">
      <a
        v-for="obj in nav"
        :key="obj"
        class="relative max-md:hidden before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
        href=""
        >{{ obj.name }}</a
      >

      <div class="hidden z-40 absolute">
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input @click="openMenu" type="checkbox" />
          <!-- hamburger icon -->
          <svg
            class="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
              d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
            />
          </svg>
          <!-- close icon -->
          <svg
            class="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
            />
          </svg>
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
