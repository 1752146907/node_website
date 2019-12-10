<template>
    <div class="detail">
        <div class="title">{{this.detail.title}}</div>
        <div class="summary">{{this.detail.summary}}</div>
        <div class="content">{{this.detail.content}}</div>
        <div class="createTime">{{this.detail.createTime}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                detail: {
                    id: 1,
                    img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2739182076,1142245613&fm=26&gp=0.jpg",
                    title: "我把最深沉的秘密放在那里。",
                    summary: "千万不要因为走得太久，而忘记了我们为什么出发。",
                    content: "你不懂我，我不怪你。首先请注意，这里通过code换取的是一个特殊的网页授权access_token,与基础支持中的access_token（该access_token用于调用其他接口）不同。公众号可通过下述接口来获取网页授权access_token。如果网页授权的作用域为snsapi_base，则本步骤中获取到网页授权access_token的同时，也获取到了openid，snsapi_base式的网页授权流程即到此为止。",
                    createTime: "2019-12-10"
                }
            }
        }
    }
</script>

<style scoped>
    .detail{
        padding: 20px;
        text-align: center;
    }
    .detail .title {
        font-size: 25px;
    }
    .detail .summary {
        padding: 20px;
        background: #dcdcdc;
    }
    .detail .content {
        padding: 20px;
        text-indent: 2em;
        line-height: 200%;
        text-align: left;
    }
    .detail .createTime {
        color: #9c9c9c;
        text-align: right;
    }
</style>
