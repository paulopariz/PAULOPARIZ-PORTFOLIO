<template>
  <div>
    <div
      class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 flex items-center"
    >
      <h1
        class="animate__animated animate__fadeIn animate__delay-1s font-sfera text-3xl max-sm:text-xl max-mn:text-lg"
      >
        PAULO <span> PARIZ</span>
        <b class="text-focusBorder"> _</b>
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
@keyframes b {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
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
