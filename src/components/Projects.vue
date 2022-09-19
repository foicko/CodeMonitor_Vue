<template>
Projects
<div>
        <input type="text" v-model="datas.key_val" class="form-control" placeholder="请输入关键字查询">
        <table class="table">
            <tr>
                <td>proj_name</td>
                <td>action</td>
            </tr>
            <tr v-for="item in ref_ls" :key="item.id">
                <td>{{ item.name }}</td>
                <!-- <td>{{ item.url }}</td> -->
                <td>null</td>
            </tr>
        </table>
    </div>
</template>
<script lang="ts" setup>
import { reactive, computed,onMounted } from 'vue';
const datas = reactive({ key_val: "", list: [] as any[] });
let get_url = 'http://localhost:5019/Items'
async function GetAll() {
    await fetch(get_url)
        .then(response => response.json())
        .then(data => {
            datas.list = data;
        });
}

const ref_ls = computed(()=>{
    return datas.list.filter((p) => {
                        return p.url.indexOf(datas.key_val) !== -1
                    })
})
onMounted(() => {
    GetAll();
});
</script>
<style scoped>

</style>