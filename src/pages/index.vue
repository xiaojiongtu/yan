<template>
<div>
    <cmp-banner></cmp-banner>
    <cmp-index></cmp-index>
</div>
</template>

<script>
    import CmpBanner from "../components/index/cmp-banner";
    import CmpIndex from "../components/index/cmp-index";
    export default {
        name: "index",
        components: {CmpIndex, CmpBanner}
    }
</script>

<style scoped>

</style>
