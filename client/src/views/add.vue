<template>
    <div class="main">
        <van-uploader
                v-model="fileList"
                :max-count="1"
                :after-read="handleAfter"
        />
<!--        <a href="https://t.asczwa.com/taobao?backurl='https://ju.taobao.com/m/jusp/alone/detailwap/mtp.htm?item_id=550967978242&spm=608.pinpaituan_jushop.pmod-zebra-ju-shop-feeds-10032_1575621432251_309-19.1&imei=866317044361062&imsi=460008603288886&ttid=227200%40taobao_android_9.2.1&sourceType=other&suid=2abc1d27-4fa5-4cd8-82f6-a1075084bdf2&ut_sk=1.XVQfZQhlpVYDAIblOs9h%2FoHY_21646297_1575882700979.Copy.10000&un=983daf44be1b97c7ad12898721723d67&share_crt_v=1&sp_tk=77+lcnF1c1lCbHBkeEjvv6U=&cpp=1&shareurl=true&short_name=h.exFSNgM&sm=bd4a99&app=chrome'">淘宝</a>-->
        <van-cell-group>
            <van-field label="文章标题" placeholder="文章标题" v-model="title"></van-field>
            <van-field label="文章简介" placeholder="文章简介" v-model="summary"></van-field>
            <van-field label="文章内容" placeholder="文章内容" v-model="content" type="textarea" autosize></van-field>
        </van-cell-group>
        <van-button  @click="handleAdd" class="add-button">提交</van-button>
    </div>
</template>

<script>
    import { Uploader, CellGroup, Field, Button } from 'vant';

    export default {
        components: {
            [Uploader.name]: Uploader,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field,
            [Button.name]: Button
        },
        data() {
            return {
                fileList: [],
                title: '',
                summary: '',
                content: '',
                img:''
            }
        },
        methods: {
            handleAfter(info) {
                console.log(info);
                this.img = info.content
            },
            handleAdd() {
                const data = {
                    title: this.title,
                    summary: this.summary,
                    content: this.content,
                    img: this.img,
                }
                console.log(data)
            }
        }
    }
</script>

<style scoped>
    .main{
        margin-top: 20px;
    }
    .add-button {
        position: absolute;
        left: 0;
        bottom: 50px;
        width: 100%;
        color: #ffffff;
        display: inline-block;
        background: #1989fa;
    }
</style>
