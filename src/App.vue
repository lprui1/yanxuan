<template>
  <div id="app"> 
      
    <router-view/>
  </div>
</template>

<script>
//rem
window.addEventListener('orientationchange',setRem);
window.addEventListener('resize',setRem);
setRem();
function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width/16+"px"
  console.log(html.style.fontSize)
}
export default{
  created() {
      setTimeout(()=>{
          this.$refs.my_scroller;
      })
  }
}

</script>

<style>

</style>
