<template>
    <div class="detail-bg">
        <div class="page">
            <cmp-crumbs :path-array="['hshs']"></cmp-crumbs>
            <detail-header></detail-header>
            <div class="detail-prompt">

            </div>
            <div class="detail-content clearfix">
               <cmp-content></cmp-content>
                <cmp-hot></cmp-hot>
            </div>
        </div>
    </div>
</template>

<script>
    import CmpCrumbs from "../components/common/cmp-crumbs";
    import DetailHeader from "../components/detail/detail-header";
    import CmpContent from "../components/detail/cmp-content";
    import CmpHot from "../components/detail/cmp-hot";
    export default {
        name: "page-detail",
        components: {CmpHot, CmpContent, DetailHeader, CmpCrumbs}
    }
</script>

<style scoped>
    .detail-bg {
        background:#FFF;
        border-top:1px solid #ebebeb;
    }

    /*  */
    .zoomview {
        width:430px;height:522px;
        position:relative;
    }

    .zoomview .zoomview-mask, .zoomview .zoomview-org {display:none;}
    .zoomview-open .zoomview-mask, .zoomview-open .zoomview-org  {display:block;}

    .zoomview-big {
        width:428px;height:428px;
        border:1px solid #e8e8e8;
        background:#f4f4f4;
        position:relative;
        cursor:pointer;
    }
    .zoomview-big img {
        width:430px;height:430px;
    }
    .zoomview-mask {
        width:230px;height:230px;
        background:url(../assets/../assets/imgs/mask.png);
        position:absolute;
        left:0;top:0;
    }

    .zoomview-thumbs {
        width:440px;height:78px;
        margin-top:14px;
        margin-right:-10px;
    }
    .zoomview-thumbs li {
        width:76px;height:76px;
        border:1px solid #e8e8e8;
        margin-right:10px;
        cursor:pointer;
    }
    .zoomview-thumbs .cur {
        width:74px;height:74px;
        border:2px solid #b4a078;
    }
    .zoomview-thumbs img {
        display:block;
        width:100%;height:100%;
    }

    .zoomview-org {
        width:428px;height:428px;
        position:absolute;
        left:440px;top:-1px;
        overflow:hidden;
        background:#f4f4f4;
        border:1px solid #e8e8e8;
    }
    .zoomview-org img {}

    /*  */
    .goods {
        width:620px;height:474px;
    }

    .goods-header {
        width:620px;height:47px;
        margin-bottom:20px;
    }
    .goods-title h3 {font-size:20px;font-weight:700;line-height:20px;margin-bottom:7px;}
    .goods-title span {font-size:14px;line-height:20px;color:#999;}
    .goods-rate .rate-num {color:#E36844;font-size:20px;}
    .goods-rate .rate-txt {font-size:13px;line-height:20px;}


    .goods-detail {
        background:#f5f3ef;
        border-top:1px dotted #dedede;
        border-bottom:1px dotted #dedede;
        padding:0 0 13px;
        line-height:24px;
        font-size:13px;
    }
    .goods-detail-item {
        height:28px;
        margin-bottom:3px;
    }
    .goods-detail-item.big {
        height:50px;
    }
    .goods-detail-item label {
        width:55px;height:28px;line-height:28px;
        font-size:13px;color:#666;
        margin-left:10px;
    }
    .goods-detail-item.big label {
        height:30px;line-height:30px;
        margin-top:16px;
    }
    .goods-detail-item .price {
        margin-top:13px;height:30px;line-height:30px;
        font-size:18px;font-weight:700;
        color:#d7282d;
        font-size:28px;
    }
    .goods-detail-item .point {
        color:#666;
    }


    .goods-order-detail {
        margin-top:20px;
        margin-left:10px;
    }
    .goods-order-detail-item {}
    .goods-order-detail-item label {
        width:54px;height:30px;line-height:30px;
        font-size:12px;color:#666;
    }

    .order-type-list {}
    .order-type-list li {
        padding:1px;
        border:1px solid #ddd;
        margin-right:10px;
        margin-bottom:15px;
    }
    .order-type-list li.cur {
        padding:0;
        border:2px solid #b4a078;
    }
    .order-type-list li a {
        display:block;
        padding:0 16px;
        height:26px;line-height:26px;
        font-size:12px;color:#333;
    }
    .order-type-list li.cur {}


    .goods-btns {
        margin-left:12px;margin-top:30px;
    }
    .goods-btn {
        width:168px;height:50px;
        text-align:center;line-height:50px;
        margin-right:10px;
    }
    .goods-btn-buy {background:#f5f3ef;color:#b4a078;border:1px solid #b4a078;}
    .goods-btn-buy:hover {background:#FFF;}
    .goods-btn-cart {background:#b4a078;color:#FFF;border:1px solid #b4a078;}
    .goods-btn-cart:hover {background:#c0ae8a;}

    /*  */
    .detail-prompt {}

    /*  */
    .detail-content {width:1090px;margin-top:30px;}

    .detail-detail {width:750px;}
    .detail-detail-header {
        width:748px;height:43px;
        border:1px solid #e8e8e8;
        background:#f5f5f5;
    }
    .detail-detail-header-btn {
        width:123px;height:40px;line-height:40px;
        text-align:center;
        border-right:1px solid #E8E8E8;
        border-bottom:1px solid #fff;
        border-top:3px solid #b4a078;
        background:#FFF;
    }

    .detail-detail-table {width:750px;margin-bottom:17px;padding-top:18px;}
    .detail-detail-table-item {
        width:315px;line-height:24px;
        padding:8px 30px;
        border-bottom:1px dashed #e8e8e8;
    }
    .detail-detail-table-item.large {
        width:690px;
    }
    .detail-detail-table-item label {display:block;width:105px;font-size:14px;}
    .detail-detail-table-item span {display:block;font-size:14px;color:#999;line-height:24px;}

    .detail-detail-imglist {width:750px;}
    .detail-detail-imglist img {width:750px;display:block;}


</style>
