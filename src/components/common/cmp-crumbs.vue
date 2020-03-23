<template>
    <div class="crumbs">
        <router-link to="/">全部商品</router-link>
        <template v-for="(path,index) in pathArray" >
            <span class="spliter">&gt;</span>
            <a :href="path.url" :class="{cur:pathArray.length-1==index}" :key="index">{{path.title}}</a>
        </template>
    </div>
</template>

<script>
    export default {
        name: "cmp-crumbs",
        props:{
            pathArray:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style scoped>
    .crumbs {
        padding:24px 0;font-size:12px;
    }

    .crumbs a {
        color:#333;
    }
    .crumbs a.cur {
        color:#999;
    }

    .crumbs .spliter {
        margin:0 7px;
    }

</style>
