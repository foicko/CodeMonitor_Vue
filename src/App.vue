<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Dashboard from './components/Dashboard.vue';
import Projects from './components/Projects.vue';
import Goals from './components/Goals.vue';
import About from './components/About.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
  <el-tabs  type="card">
    <el-tab-pane label="Dashboard"><Dashboard></Dashboard></el-tab-pane>
    <el-tab-pane label="Projects"><Projects></Projects></el-tab-pane>
    <el-tab-pane label="Goals"><Goals></Goals></el-tab-pane>
    <el-tab-pane label="About"><About></About></el-tab-pane>
  </el-tabs>
</template>

<style scoped>

</style>
