<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      message: null
    };
  },
  mounted() {
    if (sessionStorage.getItem("user")) {
      this.message = "You are logged in!";
    } else {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>