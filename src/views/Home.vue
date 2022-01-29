<script setup>
import { useStore } from "vuex";
import { reactive } from "vue";

const status = reactive({
  slide: false,
  fade: false,
});
const store = useStore();
const title = store.state.title;
</script>

<template>
  <div class="p-3 text-center font-bold text-2xl text-blue-500">
    {{ title }}
  </div>

  <div class="bg-gray-100">
    <div
      class="p-10 font-semibold bg-indigo-500 text-white slide"
      :class="{ show: status.slide }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate
      similique aspernatur ab officiis unde, at illum impedit porro adipisci,
      voluptas velit! Neque, eaque? Nisi unde dolore aliquam praesentium
      exercitationem.
    </div>
  </div>
  <button
    @click="status.slide = !status.slide"
    class="
      py-3
      px-4
      shadow-md
      m-2
      rounded
      bg-indigo-500
      hover:bg-indigo-400
      text-white
    "
  >
    Slide me
  </button>

  <div class="bg-gray-100">
    <div
      class="p-10 font-semibold bg-green-500 text-white fade"
      :class="{ show: status.fade }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate
      similique aspernatur ab officiis unde, at illum impedit porro adipisci,
      voluptas velit! Neque, eaque? Nisi unde dolore aliquam praesentium
      exercitationem.
    </div>
  </div>
  <button
    @click="status.fade = !status.fade"
    class="
      py-3
      px-4
      shadow-md
      m-2
      rounded
      bg-green-500
      hover:bg-green-400
      text-white
    "
  >
    Fade me
  </button>
</template> 

<style scoped>
.slide {
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.slide.show {
  transform: translateX(0);
}

.fade {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
}

.fade.show {
  opacity: 1;
}
</style>
