<template>
    <div class="list-bg">
        <div class="page">
            <cmp-crumbs></cmp-crumbs>
            <div class="item-list-container">
                <div class="filter clearfix">
                    <span class="name fl">分类：</span>
                    <a href="#" class="fl">居家生活</a>
                    <a href="#" class="fl">母婴亲子</a>
                    <a href="#" class="fl">全球特色</a>
                    <a href="#" class="fl">数码家电</a>
                    <a href="#" class="fl">运动旅行</a>
                </div>
                <cmp-list :list="searchResult" v-if="searchResult"></cmp-list>
                <div v-else>
                    loading
                </div>
                <cmp-pagination :cur="page.cur" :total="page.total" @change="pageChange"></cmp-pagination>
            </div>

        </div>
    </div>
</template>

<script>
    import CmpCrumbs from "../components/common/cmp-crumbs";
    import CmpPagination from "../components/common/cmp-pagination";
    import CmpList from "../components/search/cmp-list";
    export default {
        name: "page-search",
        components: {CmpList, CmpPagination, CmpCrumbs},
        data(){
            return{
               searchResult:null,
                keyword:this.$route.query.keyword,
                page:{
                    cur:1,
                    total:0
                }
            }
        },
        methods:{
            async  pageChange(page){
                this.page.cur=page
                await this.init()

            },
            async init(){
                let {data:{err,data}}=await this.axios('/search',{
                    params:{
                        keyword:this.keyword,
                        page: this.page.cur
                    }
                })
                 this.searchResult=data.list
                this.page.total=data.pagecount;
            }
        },
       async created() {
            console.log("---search")
           console.log(this.keyword);

           await  this.init()
        },
        watch:{
             '$route'(){
                         this.keyword=this.$route.query.keyword
                         this.init()
                    }

        }
    }
</script>

<style scoped>
    .list-bg {
        background:#f5f5f5;
        border-top:1px solid #e2e2e2;
    }
    .item-list-container {
        width:1010px;padding:0 40px;
        background:#FFF;
    }
    .item-list-container .filter {
        margin-top:10px;
        padding-top:30px;
        border-bottom:1px solid #eaeaea;
    }
    .item-list-container .filter .name {
        color:#999;font-size:14px;margin-right:28px;
    }
    .item-list-container .filter a {
        margin-right:30px;margin-bottom:16px;
        font-size:14px;color:#333;
    }
    .item-list-container .filter a:hover {
        color:#b4a078;
    }

</style>
