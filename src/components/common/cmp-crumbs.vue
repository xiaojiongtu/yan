<template>
    <div class="crumbs">
        <a href="#">全部商品</a>
        <span class="spliter">&gt;</span>
        <a href="#" class="cur">枕头</a>
    </div>
</template>

<script>
    export default {
        name: "cmp-crumbs"
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
