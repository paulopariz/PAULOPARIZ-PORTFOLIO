<template>
  <nav class="fixed z-50 -top-2 bg-red-900 w-full py-9 px-6">
    <ul
      class="font-sfera container m-auto justify-between flex items-center gap-14 max-lg:gap-9"
    >
      <div><p class="hidden text-transparent">P</p></div>
      <div class="flex items-center gap-14 max-lg:gap-9">
        <a
          v-for="obj in nav"
          :key="obj"
          class="relative max-md:hidden before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
          :href="obj.href"
          >{{ obj.name }}</a
        >
      </div>

      <div class="menuMobile md:hidden">
        <div v-show="x">
          <button @click="openMenu" class="btnMenu swap-off -ml-14 max-sm:-ml-16">
            MENU
          </button>
        </div>
        <div v-show="y">
          <button @click="closeMenu" class="btnClose swap-off -ml-14 max-sm:-ml-16">
            FECHAR
          </button>
        </div>
      </div>
    </ul>
  </nav>
  <div name="slide-fade" v-show="menu" class="menu w-full fixed z-30">
    <div
      class="links flex h-96 flex-col justify-between max-sm:justify-center max-sm:gap-10"
    >
      <a
        v-for="obj in nav"
        :key="obj"
        class="font-sfera text-5xl max-sm:text-3xl max-mm:text-2xl"
        :href="obj.href"
        @click="closeLinks"
      >
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

      x: true,
      y: false,

      nav: [
        {
          name: "SOBRE",
          href: "#sobre",
        },
        {
          name: "HABILIDADES",
          href: "#habilidades",
        },
        {
          name: "PROJETOS",
          href: "#projetos",
        },
        {
          name: "CONTATO",
          href: "#contato",
        },
      ],
    };
  },

  methods: {
    openMenu() {
      this.menu = true;
      this.y = true;
      this.x = false;
    },

    closeMenu() {
      this.menu = false;
      this.y = false;
      this.x = true;
    },

    closeLinks() {
      this.menu = false;
      this.y = false;
      this.x = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Saira:wght@200;300;400;500;600;700;800;900&display=swap");
@import "../../assets/scss/patter.scss";

nav {
  background: linear-gradient(180deg, #080808 0%, rgba(3, 9, 23, 0) 100%),
    linear-gradient(180deg, #080808 0%, rgba(3, 9, 23, 0) 100%),
    linear-gradient(180deg, #080808 0%, rgba(3, 9, 23, 0) 100%);
  ul {
    a {
      font-size: 14px;
      transition: ease 0.3s;
      &:hover {
        opacity: 0.9;
      }
    }

    .menuMobile {
      .btnMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &::before {
          content: "";
          width: 7px;
          height: 7px;
          background-color: #1a0cc5;
          position: absolute;
          rotate: 45deg;
          box-shadow: 0px 0px 14px 1px #3419e8;
          margin-left: -20px;
          margin-top: 3px;
        }
      }

      .btnClose {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &::before {
          content: "";
          width: 7px;
          height: 7px;
          background-color: #4b544b;
          position: absolute;
          rotate: 45deg;
          box-shadow: 0px 0px 14px 1px #4b544b6e;
          margin-left: -20px;
          margin-top: 3px;
        }
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
  margin-top: -200px;
  height: 999px;
  .links {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 770px) {
    display: none;
  }

  @media (max-width: 642px) {
    .links {
      top: 43%;
    }
  }

  @media (max-width: 376px) {
    .links {
      top: 50%;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
