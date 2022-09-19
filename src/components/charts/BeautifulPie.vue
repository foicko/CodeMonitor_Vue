  
<template>
    <div>
        <v-chart class="chart" :option="option" />
        <div>传入的数据是：{{data}}</div>
    </div>
</template>
  
<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
    ToolboxComponent,
    ToolboxComponentOption,
    LegendComponent,
    LegendComponentOption
} from 'echarts/components';
import {
    PieSeriesOption
} from 'echarts/charts';
import {
    LabelLayout
} from 'echarts/features';

import VChart, { THEME_KEY } from 'vue-echarts';
import { ref } from 'vue';
let key = defineProps<{ data: any }>()
use([
    ToolboxComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout
]);
const option = ref({
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: key.data
        }
    ]
});

</script>
  
<style scoped>
.chart {
    height: 600px;
    width: 720px;
}

body {
    margin: 0;
}
div{
    margin: 20px;
    background-color: #eeeeee;

    border-radius: 20px;

}
</style>
  