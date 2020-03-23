<template>
    <div class="detail-header clearfix">
                <!-- <div class="zoomview zoomview-open fl"> -->
                <div class="zoomview fl" :class="{'zoomview':!zoom.open,'zoomview-open':zoom.open}"

                >
                    <div class="zoomview-big"  @mouseover="zoom.open=true"
                         @mouseout="zoom.open=false"
                         @mousemove="move"
                    >
                        <img src="../../assets/imgs/zoom-big-1.png" alt="">
                        <div class="zoomview-mask" :style="{left:zoom.maskX+'px',top:zoom.maskY+'px'}"></div>
                        <div class="zoomview-a"></div>
                    </div>
                    <ul class="zoomview-thumbs clearfix">
                        <li class="fl cur">
                            <img src="../../assets/imgs/zoom-thumb-1.png" alt="">
                        </li>
                        <li class="fl">
                            <img src="../../assets/imgs/zoom-thumb-2.jpg" alt="">
                        </li>
                        <li class="fl">
                            <img src="../../assets/imgs/zoom-thumb-3.jpg" alt="">
                        </li>
                        <li class="fl">
                            <img src="../../assets/imgs/zoom-thumb-4.jpg" alt="">
                        </li>
                        <li class="fl">
                            <img src="../../assets/imgs/zoom-thumb-5.jpg" alt="">
                        </li>
                    </ul>
                    <div class="zoomview-org" >
                        <img src="../../assets/imgs/zoom-org-1.png" :style="{left:zoom.bigX+'px',top:zoom.bigY+'px'}" alt="">
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
                                    <a href="javascript:;">猫咪</a>
                                </li>
                                <li class="fl">
                                    <a href="javascript:;">狗子</a>
                                </li>
                                <li class="fl">
                                    <a href="javascript:;">螃蟹</a>
                                </li>
                            </ul>
                        </div>
                        <div class="goods-order-detail-item clearfix">
                            <label class="fl">数量</label>
                            <number-input v-model="count" :max="9" :min="1"></number-input>
                        </div>
                    </div>
                    <div class="goods-btns">
                        <a href="javascript:;" class="goods-btn goods-btn-buy fl">立即购买</a>
                        <a href="javascript:;" class="goods-btn goods-btn-cart fl">加入购物车</a>
                    </div>
                </div>
            </div>
</template>

<script>
    import CmpCrumbs from "../common/cmp-crumbs";
    import NumberInput from "../common/number-input";
    export default {
        name: "detail-header",
        components: {NumberInput, CmpCrumbs},
        data(){
            return{
                count:1,
                zoom:{
                    open:false,
                    maskX:0,
                    maskY:0,
                    bigX:0,
                    bigY:0,

                }
            }
        },
        methods:{
            move(e){
                const S=230;
                const B=428;
                const O=800;
                let x=e.offsetX-S/2;
                let y=e.offsetY-S/2;
                if (x<0)x=0;
                else if (x>B-S)x=B-S;

                if (y<0)y=0;
                else if(y>B-S)y=B-S;

                 let x2=x*(O-B)/(B-S);
                 let y2=y*(O-B)/(B-S);

                this.zoom.maskX=x;
                this.zoom.maskY=y
                //
                this.zoom.bigX=-x2
                this.zoom.bigY=-y2
            }
        }
    }
</script>

<style scoped>
    .detail-bg {
        background:#FFF;
        border-top:1px solid #ebebeb;
    }

    /*  */
    .zoomview,.zoomview-open  {
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
        background:url(../../assets/imgs/mask.png);
        position:absolute;
        left:0;top:0;
        z-index: 1;
    }
    .zoomview-a{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;


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
    .zoomview-org  {
        img{
            position: absolute;
        }
    }

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
