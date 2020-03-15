<template>
    <div class="detail-bg">
        <div class="page">
            <cmp-crumbs></cmp-crumbs>
            <div class="detail-header clearfix">
                <!-- <div class="zoomview zoomview-open fl"> -->
                <div class="zoomview fl">
                    <div class="zoomview-big">
                        <img src="../assets/imgs/zoom-big-1.png" alt="">
                        <div class="zoomview-mask"></div>
                    </div>
                    <ul class="zoomview-thumbs clearfix">
                        <li class="fl cur">
                            <img src="../assets/imgs/zoom-thumb-1.png" alt="">
                        </li>
                        <li class="fl">
                            <img src="../assets/imgs/zoom-thumb-2.jpg" alt="">
                        </li>
                        <li class="fl">
                            <img src="../assets/imgs/zoom-thumb-3.jpg" alt="">
                        </li>
                        <li class="fl">
                            <img src="../assets/imgs/zoom-thumb-4.jpg" alt="">
                        </li>
                        <li class="fl">
                            <img src="../assets/imgs/zoom-thumb-5.jpg" alt="">
                        </li>
                    </ul>
                    <div class="zoomview-org">
                        <img src="../assets/imgs/zoom-org-1.png" alt="">
                    </div>
                </div>

                <!-- not done -->
                <div class="goods fr">
                    <div class="goods-header clearfix">
                        <div class="goods-title fl">
                            <h3>大英博物馆 埃及神猫靠枕</h3>
                            <span>请带我回家吧~喵！</span>
                        </div>
                        <div class="goods-rate fr">
                            <div class="rate-num">
                                100%
                            </div>
                            <div class="rate-txt">
                                好评率
                            </div>
                        </div>
                    </div>
                    <div class="goods-detail">
                        <div class="goods-detail-item big clearfix">
                            <label class="fl">价格</label>
                            <div class="fl price">
                                ¥159
                            </div>
                        </div>
                        <div class="goods-detail-item clearfix">
                            <label class="fl">积分</label>
                            <div class="fl point">
                                购买最高得15积分
                            </div>
                        </div>
                    </div>
                    <div class="goods-order-detail">
                        <div class="goods-order-detail-item clearfix">
                            <label class="fl">抱枕</label>
                            <ul class="order-type-list fl">
                                <li class="fl cur">
                                    <a href="#">猫咪</a>
                                </li>
                                <li class="fl">
                                    <a href="#">狗子</a>
                                </li>
                                <li class="fl">
                                    <a href="#">螃蟹</a>
                                </li>
                            </ul>
                        </div>
                        <div class="goods-order-detail-item clearfix">
                            <label class="fl">数量</label>
                            <div class="number-input fl">
                                <a href="#" class="btn btn-plus btn-disabled fl">-</a>
                                <input type="text" class="number fl" value="1" maxlength="8" />
                                <a href="#" class="btn btn-minus fl">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="goods-btns">
                        <a href="#" class="goods-btn goods-btn-buy fl">立即购买</a>
                        <a href="#" class="goods-btn goods-btn-cart fl">加入购物车</a>
                    </div>
                </div>
            </div>
            <div class="detail-prompt">

            </div>
            <div class="detail-content clearfix">
                <div class="detail-detail fl">
                    <div class="detail-detail-header clearfix">
                        <a href="#" class="detail-detail-header-btn fl">详情</a>
                    </div>
                    <ul class="detail-detail-table">
                        <li class="detail-detail-table-item fl">
                            <label class="fl">材质</label>
                            <span class="fl">全棉</span>
                        </li>
                        <li class="detail-detail-table-item fl">
                            <label class="fl">款式</label>
                            <span class="fl">床单式</span>
                        </li>
                        <li class="detail-detail-table-item fl">
                            <label class="fl">适用季节</label>
                            <span class="fl">四季通用</span>
                        </li>
                        <li class="detail-detail-table-item fl">
                            <label class="fl">图案</label>
                            <span class="fl">几何</span>
                        </li>
                        <li class="detail-detail-table-item large fl">
                            <label class="fl">风格</label>
                            <span class="fl">现代简约、日式</span>
                        </li>
                        <li class="detail-detail-table-item large fl">
                            <label class="fl">尺寸</label>
                            <span class="fl">1.5米床： 被套 200*230cm/ 枕套：48*74cm*2/ 床单：245*250cm<br/>1.8米/ 2.0米床：被套 220*240cm/ 枕套：48*74cm*2/ 床单：245*270cm</span>
                        </li>
                    </ul>
                    <div class="detail-detail-imglist">
                        <img src="../assets/imgs/detail-1.jpg" alt="">
                        <img src="../assets/imgs/detail-2.jpg" alt="">
                        <img src="../assets/imgs/detail-3.jpg" alt="">
                        <img src="../assets/imgs/detail-4.jpg" alt="">
                        <img src="../assets/imgs/detail-5.jpg" alt="">
                    </div>
                </div>
                <div class="detail-hot fr">
                    <div class="detail-hot-header">
                        24小时热销榜
                    </div>
                    <ul class="detail-hot-list">
                        <li class="detail-hot-list-item">
                            <img src="../assets/imgs/hot-1.png" alt="">
                            <a href="#">严选礼品卡 1000元面值</a>
                            <span>¥1000</span>
                        </li>
                        <li class="detail-hot-list-item">
                            <img src="../assets/imgs/hot-2.png" alt="">
                            <a href="#">严选礼品卡 1000元面值</a>
                            <span>¥1000</span>
                        </li>
                        <li class="detail-hot-list-item">
                            <img src="../assets/imgs/hot-3.png" alt="">
                            <a href="#">严选礼品卡 1000元面值</a>
                            <span>¥1000</span>
                        </li>
                        <li class="detail-hot-list-item">
                            <img src="../assets/imgs/hot-4.png" alt="">
                            <a href="#">严选礼品卡 1000元面值</a>
                            <span>¥1000</span>
                        </li>
                        <li class="detail-hot-list-item">
                            <img src="../assets/imgs/hot-5.png" alt="">
                            <a href="#">严选礼品卡 1000元面值</a>
                            <span>¥1000</span>
                        </li>
                        <li class="detail-hot-list-item nbb">
                            <img src="../assets/imgs/hot-6.png" alt="">
                            <a href="#">严选礼品卡 1000元面值</a>
                            <span>¥1000</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CmpCrumbs from "../components/common/cmp-crumbs";
    export default {
        name: "page-detail",
        components: {CmpCrumbs}
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


    .detail-hot {width:300px;border:1px solid #e8e8e8;}
    .detail-hot-header {
        width:298px;height:43px;line-height:43px;
        text-align:center;
        border:1px solid #e8e8e8;
        background:#f5f5f5;
        font-size:18px;font-weight:700;
    }

    .detail-hot-list {
        width:298px;
    }
    .detail-hot-list-item {
        width:250px;height:318px;
        margin:24px;margin-bottom:0;
        border-bottom:1px solid #e8e8e8;
    }
    .detail-hot-list-item img {
        display:block;
        width:250px;height:250px;
    }
    .detail-hot-list-item a {
        display:block;
        width:240px;height:18px;
        margin-bottom:8px;
        text-align:center;line-height:18px;
        font-size:14px;
        color:#333;
    }
    .detail-hot-list-item a:hover {
        color:#b4a078;
    }

    .detail-hot-list-item span {
        display:block;
        height:24px;line-height:24px;color:#d62525;
        text-align:center;
        font-size:14px;
    }

</style>
