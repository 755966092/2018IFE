<template>
    <div class="wrap">
        <div class="title">
            <slot name="title">
                {{title}}
            </slot>
        </div>
        <div class="content">
            <p>
                <span>标题:</span>
                <span>
                    <slot name="subTitle">
                        {{subTitle}}
                    </slot>
                </span>
            </p>
            <p>
                <span>内容:</span>
                <span>
                    <slot name="content">
                        {{content}}
                    </slot>
                </span>
            </p>
            <p>
                <span>时间:</span>
                <span>
                    <slot name="time">
                        {{time}}
                    </slot>
                </span>
            </p>
        </div>
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
