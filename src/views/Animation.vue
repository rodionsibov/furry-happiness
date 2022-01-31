<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const text = store.state.text;
const x = ref(0);
const xCoordinate = (e) => {
  x.value = e.clientX;
};
const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
});
</script>

<template>
  <div class="p-3 text-center font-bold text-2xl text-blue-500 movearia">
    {{ text }}
  </div>
  <div class="p-3">x: {{ x }}</div>
  <transition name="fade">
    <div
      v-if="isShow"
      class="p-6 bg-green-500 text-white"
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ea.
      Harum quae aut sit! Nemo laudantium distinctio eius ipsum. Facilis
      accusantium minima obcaecati ea totam dolorum reiciendis esse, corrupti
      dolor suscipit asperiores a officiis quos ducimus atque iste nisi aut eum
      provident, veniam nulla. Illum placeat eum quidem deserunt numquam
      aspernatur dolores, voluptas mollitia quaerat fugit eos sunt ut eligendi
      repellat! Cum quod perferendis ad, veritatis sequi nam dolor officiis eum
      temporibus neque minus reprehenderit commodi porro illum repellat ex unde
      nulla assumenda, officia asperiores. Aspernatur beatae temporibus fugiat,
      odit vel quod. Omnis itaque, consectetur sed sapiente natus voluptates
      est?
    </div>
  </transition>
</template> 

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.movearea {
  transition: 0.2s background-color ease;
}
</style>
