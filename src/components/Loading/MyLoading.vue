<template>
  <div>
    <div
      class="fixed z-50 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex items-center w-full h-full bg-[#080808]"
    >
      <h1
        class="font-sfera text-3xl max-sm:text-xl max-mn:text-lg m-auto w-full text-center"
      >
        PAULO <span>PARIZ</span>

        <div
          class="w-72 h-[4.5px] m-auto mt-4 bg-[#0e0e0e] rounded-full max-sm:w-52 max-mn:w-40"
        >
          <div class="h-[4.5px] w-0 rounded-full bg-black mt-4 loading shadow-2xl"></div>
        </div>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLoading",
};
</script>

<style>
.animationLetra {
  animation-delay: 1s;
}

.loading {
  animation: loading 3s ease both;
  animation-delay: 1s;
}

@keyframes loading {
  0% {
    width: 0px;
  }

  50% {
    width: 50%;
    background: #4525d2;
  }
  85% {
    width: 85%;
  }
  100% {
    background: #4525d2;
    width: 100%;
  }
}
b {
  -webkit-animation: b 0.9s linear infinite;
  -moz-animation: b 0.9s linear infinite;
  -ms-animation: b 0.9s linear infinite;
  -o-animation: b 0.9s linear infinite;
  animation: b 0.9s linear infinite;
}

.animate__fadeIn {
  --animate-duration: 1s;
}
</style>
