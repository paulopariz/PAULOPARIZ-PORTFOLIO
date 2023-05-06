<template>
  <nav class="fixed z-50 -top-2 w-full pt-9 pb-16 px-6">
    <div
      class="font-sfera container m-auto justify-between flex items-center gap-14 max-lg:gap-9"
    >
      <div><p class="hidden text-transparent">P</p></div>
      <div class="flex items-center gap-14 max-lg:gap-9">
        <a
          v-for="obj in nav"
          :key="obj"
          class="relative max-md:hidden before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-focusBorder before:transition hover:before:scale-100 animate__animated animate__fadeInDown animate__delay-1s"
          :href="obj.href"
          >{{ obj.name }}</a
        >
      </div>

      <div class="menuMobile md:hidden">
        <div v-show="x" mode="out-in">
          <button
            @click="openMenu"
            class="btnMenu swap-off -ml-14 max-sm:-ml-16 animate__animated animate__fadeIn"
          >
            MENU
          </button>
        </div>
        <div v-show="y">
          <button
            @click="closeMenu"
            class="btnClose swap-off -ml-14 max-sm:-ml-24 animate__animated animate__fadeIn"
          >
            FECHAR
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div
    v-show="menu"
    class="menu w-full fixed z-30 animate__animated animate__slideInDown"
    :class="{ animate__slideOutUp }"
  >
    <div
      class="links flex h-96 flex-col justify-between max-sm:justify-center max-sm:gap-10 animate__animated animate__fadeIn"
    >
      <a
        v-for="obj in nav"
        :key="obj"
        class="font-sfera text-5xl max-sm:text-3xl max-mn:text-xl animate__animated animate__fadeInUp animate__delay-1s"
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
      animate__slideOutUp: false,

      x: true,
      y: false,

      nav: [
        {
          name: "Início",
          href: "#",
        },
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
      this.animate__slideOutUp = true;

      setTimeout(() => {
        this.menu = false;
        this.y = false;
        this.x = true;
        this.animate__slideOutUp = false;
      }, 900);
    },

    closeLinks() {
      this.menu = false;
      this.y = false;
      this.x = true;
    },
  },
};
</script>

<style src="./NavBar.scss" lang="scss" scoped></style>
