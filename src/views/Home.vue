<template>
  <div class="home">
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "Home",
  components: { Form }
};
</script>

<style lang="scss" scoped>
.home {
  width: 90%;
  margin: auto;
  max-width: 560px;
}
</style>
