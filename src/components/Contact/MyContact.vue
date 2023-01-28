<template>
  <div class="mt-48 mb-20 px-6">
    <h1
      class="font-sfera text-5xl ml-11 max-md:text-4xl max-sm:text-3xl max-xl:ml-10 max-sm:ml-8"
    >
      CONTATO
    </h1>

    <div class="mt-16 m-auto">
      <form
        action="https://api.staticforms.xyz/submit"
        method="POST"
        class="w-2/4 m-auto max-lg:w-full"
        target="_blank"
      >
        <input
          type="hidden"
          name="accessKey"
          value="f6a0e930-21e6-4fdf-b0a5-cbe6d8c95fe1"
        />
        <input type="hidden" name="redirectTo" value="http://localhost:8080/" />
        <div class="relative z-0 mb-16 group">
          <input
            name="name"
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-400 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-focusBorder peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-600 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-focusBorder peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Nome</label
          >
        </div>
        <div class="relative z-0 w-full mb-16 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-400 resize-none appearance-none d focus:outline-none focus:ring-0 focus:border-focusBorder peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-lg text-gray-600 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-focusBorder peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email</label
          >
        </div>
        <div class="relative z-0 w-full mb-16 group">
          <input
            type="text"
            name="message"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-400 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-focusBorder peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-lg text-gray-600 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-focusBorder peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Mensagem</label
          >
        </div>

        <div class="sendForm">
          <button @click="submit" type="submit">ENVIAR EMAIL</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyContact",

  data() {
    return {};
  },

  methods: {
    submit() {
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    },
  },
};
</script>

<style src="./MyContact.scss" lang="scss" scoped />
