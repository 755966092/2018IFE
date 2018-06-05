<template>
    <div class="wrap">
       asdasdasds
    </div>
</template>

<script>
export default {
    name: 'box',
    props: {
        title: {
            type:String,
            default:'标题'
        },
        subTitle: {
            type:String,
            default:'标题'
        },
        content: {
            type:String,
            default:'标题'
        },
        time: {
            type:String,
            default:'标题'
        },
    }
}
</script>

<style scoped>
    .wrap {
        width: 180px;
        height: 200px;
        background-color: #f00;
        padding: 10px 10px;
        box-sizing: border-box;
    }
    .title {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #0f0;
        margin: 0 auto;
    }
    .content {
        margin: 0 auto;
    }
   
</style>
