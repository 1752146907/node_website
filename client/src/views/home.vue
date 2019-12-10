<template>
    <div class="main">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell
                    @click="handleClick(item.id)"
                    v-for="item in list"
                    :key="item.id" >
                <div class="list">
                    <div class="left">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="right">
                        <div class="title">{{item.title}}</div>
                        <div class="create-time">{{item.createTime}}</div>
                    </div>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
    import { List, Cell } from 'vant';
    export default {
        components: {
            [List.name]: List,
            [Cell.name]: Cell
        },
        data() {
            return {
                loading: false,
                finished: false,
                list: []
            }
        },
        methods:{
            onLoad() {
                setTimeout(() => {
                    this.loading = false;
                    this.finished = true;
                    this.list = [{
                        id: 1,
                        img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2739182076,1142245613&fm=26&gp=0.jpg",
                        title: "我把最深沉的秘密放在那里。",
                        summary: "千万不要因为走得太久，而忘记了我们为什么出发。",
                        content: "你不懂我，我不怪你。",
                        createTime: "2019-12-10"
                    }, {
                        id: 2,
                        img: "http://img3.imgtn.bdimg.com/it/u=3300953454,190546509&fm=26&gp=0.jpg",
                        title: "我打算在下个月和樱子结婚。",
                        summary: "每个人都有一个死角， 自己走不出来，别人也闯不进去。",
                        content: "那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？",
                        createTime: "2019-12-10"
                    }, {
                        id: 1,
                        img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
                        title: "我把最深沉的秘密放在那里。",
                        summary: "千万不要因为走得太久，而忘记了我们为什么出发。",
                        content: "你不懂我，我不怪你。",
                        createTime: "2019-12-10"
                    }, {
                        id: 2,
                        img: "http://img3.imgtn.bdimg.com/it/u=3300953454,190546509&fm=26&gp=0.jpg",
                        title: "我打算在下个月和樱子结婚。",
                        summary: "每个人都有一个死角， 自己走不出来，别人也闯不进去。",
                        content: "那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？",
                        createTime: "2019-12-10"
                    }, {
                        id: 1,
                        img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2739182076,1142245613&fm=26&gp=0.jpg",
                        title: "我把最深沉的秘密放在那里。",
                        summary: "千万不要因为走得太久，而忘记了我们为什么出发。",
                        content: "你不懂我，我不怪你。",
                        createTime: "2019-12-10"
                    }, {
                        id: 2,
                        img: "http://img3.imgtn.bdimg.com/it/u=3300953454,190546509&fm=26&gp=0.jpg",
                        title: "我打算在下个月和樱子结婚。",
                        summary: "每个人都有一个死角， 自己走不出来，别人也闯不进去。",
                        content: "那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？",
                        createTime: "2019-12-10"
                    }, {
                        id: 1,
                        img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
                        title: "我把最深沉的秘密放在那里。",
                        summary: "千万不要因为走得太久，而忘记了我们为什么出发。",
                        content: "你不懂我，我不怪你。",
                        createTime: "2019-12-10"
                    }, {
                        id: 2,
                        img: "http://img3.imgtn.bdimg.com/it/u=3300953454,190546509&fm=26&gp=0.jpg",
                        title: "我打算在下个月和樱子结婚。",
                        summary: "每个人都有一个死角， 自己走不出来，别人也闯不进去。",
                        content: "那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？",
                        createTime: "2019-12-10"
                    }];
                }, 1000)
            },
            handleClick(id) {
                this.$router.push({
                    path: "/detail",
                    query: {
                        id: id
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .main{
        margin-bottom: 50px
    }
    .list{
        display: flex;
        flex-direction: row;
    }
    .list .left {
        width: 150px;
        height: 100px;
        border-radius: 10px;
    }
    .list .left img{
        width: 100%;
        display: block;
    }
    .list .right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 15px;
    }
    .list .right .title{
        font-size: 18px;
    }
    .list .right .create-time{
        font-size: 12px;
        color: #e9e9e9;
    }
</style>
