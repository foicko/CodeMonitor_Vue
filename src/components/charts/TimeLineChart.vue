<template>
    <div>
        <v-chart class="chart" :option="option" />
        <div>传入的数据是：{{data}}</div>
    </div>

</template>
  
<script setup lang="ts">
import { use } from 'echarts/core';
import { ref } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';
// VChart是Vue的适配，不要丢
import {
    GridComponent,
    GridComponentOption
} from 'echarts/components';
import {
    LineChart,
    LineSeriesOption
} from 'echarts/charts';
import {
    UniversalTransition
} from 'echarts/features';
import {
    CanvasRenderer
} from 'echarts/renderers';

use(
    [GridComponent, LineChart, CanvasRenderer, UniversalTransition]
);

let key = defineProps<{ data: any }>()

const option = ref({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: key.data,
            type: 'line',
            smooth: true
        }
    ]
});

</script>
  
<style scoped>
.chart {
    height: 360px;
    width: 540px;
}
body {
    margin: 0;
}
div{
    background-color: #eeeeee;
    border-radius: 20px;
    margin: 20px;
}
</style>
  