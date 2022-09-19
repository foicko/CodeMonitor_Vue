<template>
    <div>
        Total Coding Time This Week : {{key.data}}
    </div>
    
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
let key = defineProps<{ data: any }>()
</script>
<style scoped>
div{
    background-color: #eeeeee;
    margin: 20px;
    height: 540px;
    border-radius: 20px;
}
</style>