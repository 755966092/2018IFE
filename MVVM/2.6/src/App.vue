<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  data: function() {
    return {
      info: [
        {
          is: true,
          name: "a"
        },
        {
          is: true,
          name: "b"
        },
        {
          is: false,
          name: "c"
        }
      ]
    };
  },
 
};
</script>

<style>
.ipt {
  width: 300px;
}
</style>
