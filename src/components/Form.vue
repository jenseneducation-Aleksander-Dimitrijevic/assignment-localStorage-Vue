<template>
  <form @submit.prevent="handleSubmit">
    <h1>Log in</h1>
    <input type="text" v-model="email" placeholder="Enter e-mail" />
    <input type="password" placeholder="Enter password" />
    <button>Log in</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    handleSubmit() {
      if (!this.email) {
        alert("Empty field's");
        return;
      }
      const newUser = {
        id: Date.now(),
        email: this.email
      };
      this.$store.dispatch("setSessionStorage", newUser);
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  input,
  button {
    width: 100%;
    outline: none;
    margin: 1rem 0;
    padding: 1rem 10px;
    border-radius: 3px;
    border: 1px solid #eee;
  }

  button {
    width: 200px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    display: inline-block;
    text-transform: uppercase;
    background: rgb(3, 62, 90);
    &:hover {
      background: darken(rgb(3, 62, 90), 10%);
    }
  }
}
</style>