<template>
    DashBoard
<div>
    <el-row :gutter="10">
    <el-col :span="12"><language-chart :data="lang_data"></language-chart></el-col>
    <el-col :span="12"><time-line-chart :data="time_data"></time-line-chart></el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><beautiful-pie :data="beauty_data"></beautiful-pie></el-col>
    <el-col :span="12"><total-time :data="total_time"></total-time></el-col>
  </el-row>
</div>

</template>
<script lang="ts" setup>
import LanguageChart from './charts/LanguageChart.vue';
import { ref } from 'vue'
import TimeLineChart from './charts/TimeLineChart.vue';
import BeautifulPie from './charts/BeautifulPie.vue';
import TotalTime from './charts/TotalTime.vue';
let lang_data = ref([
    { value: 335, name: 'C#' },
    { value: 310, name: 'C++' },
    { value: 234, name: 'Java' },
    { value: 135, name: 'Python' },
    { value: 148, name: 'JavaScript' }
])
let time_data = ref([820, 932, 901, 934, 1290, 1330, 1320])
let beauty_data = ref([
    { value: 40, name: 'C++ 98' },
    { value: 38, name: 'C++ 20' },
    { value: 32, name: 'C#' },
    { value: 30, name: 'Java' },
    { value: 28, name: 'Python' },
    { value: 26, name: 'Rust' },
    { value: 22, name: 'TS' },
    { value: 18, name: 'Golang' }
])
let total_time = ref(12)
</script>
<style scoped>

</style>