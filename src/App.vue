<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="p-3 border-b-gray-300 border">
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link>
  </div>

  <router-view></router-view>
</template>

<style>
body {
  overflow: hidden;
}

.router-link-active {
  font-weight: bold;
}
</style>