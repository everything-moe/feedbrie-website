<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="sass">
body.body--dark
  background-color: $body-bg

  ::selection
    background-color: $secondary
    color: white

body.body--light
  background-color: $light-background

  ::selection
    background-color: $secondary
    color: white
</style>
