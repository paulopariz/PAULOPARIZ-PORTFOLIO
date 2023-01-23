<template>
  <div class="bg">
    <header class="mt-24 container m-auto">
      <h1 class="text-7xl absolute top-1/4 font-sfera">PAULO PARIZ</h1>
      <div class="eclipse"></div>

      <div>
        <div class="github flex items-center justify-between mt-16 font-sfera">
          <div>
            <h2>30</h2>
            <span>Seguidores</span>
          </div>
          <div>
            <h2>87</h2>
            <span>Seguindo</span>
          </div>
          <div>
            <h2>22</h2>
            <span>Repositórios</span>
          </div>
        </div>
        <a href="" class="font-sfera">
          SEGUIR GITHUB <img src="../../assets/img/icongithub.svg" alt="" />
        </a>
      </div>
    </header>
    <div class="mouse_scroll">
      <div>
        <span class="m_scroll_arrows one"></span>
        <span class="m_scroll_arrows two"></span>
        <span class="m_scroll_arrows three"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style src="./MyHeader.scss" lang="scss" />
