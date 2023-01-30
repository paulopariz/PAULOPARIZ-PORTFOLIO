<template>
  <nav class="container m-auto flex items-center justify-between py-9 px-6">
    <div><p class="hidden">P</p></div>
    <ul class="font-sfera flex items-center gap-14 max-lg:gap-9">
      <a
        v-for="obj in nav"
        :key="obj"
        class="relative max-md:hidden before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100"
        :href="obj.href"
        >{{ obj.name }}</a
      >

      <div class="menuMobile md:hidden z-40 fixed">
        <label class="swap">
          <input @click="openMenu" type="checkbox" />
          <div class="btnClose swap-on -ml-16 max-sm:-ml-20">FECHAR</div>
          <div class="btnMenu swap-off -ml-14 max-sm:-ml-16">MENU</div>
        </label>
      </div>
    </ul>
  </nav>
  <div name="slide-fade" v-show="menu" class="menu w-full fixed z-30">
    <div class="links flex h-96 flex-col justify-between x">
      <a
        v-for="obj in nav"
        :key="obj"
        class="font-sfera text-5xl max-sm:text-3xl"
        :href="obj.href"
        @click="closeMenu"
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

      nav: [
        {
          name: "SOBRE",
          href: "#about",
        },
        {
          name: "HABILIDADES",
          href: "#skills",
        },
        {
          name: "PROJETOS",
          href: "#projects",
        },
        {
          name: "CONTATO",
          href: "#contact",
        },
      ],
    };
  },

  methods: {
    openMenu() {
      this.menu = !this.menu;
    },

    closeMenu() {
      this.menu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
  margin-top: -72px;
  height: 999px;
  .links {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 642px) {
    .links {
      top: 40%;
    }
  }

  @media (min-width: 770px) {
    display: none;
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
