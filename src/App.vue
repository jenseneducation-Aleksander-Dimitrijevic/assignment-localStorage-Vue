<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>