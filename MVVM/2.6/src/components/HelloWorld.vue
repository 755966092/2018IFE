<template>
  <div class="hello">
     <Box class="box">
       <span slot="title">asdasd</span>
       <span slot="content">内容</span>
       <span slot="time">2018-06-05</span>
       <span slot="subTitle">小标题</span>
    </Box>
    <Box class="box" title="title奥术大师" subTitle="小标题" content="内容" time="2018-06-05"/> 
  </div>
</template>

<script>
import Box from './box'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   components: {
    Box
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box {
  display: inline-block;
  margin: 20px;
}
</style>
