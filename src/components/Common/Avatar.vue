<template lang="pug">
  div.avatar
    img(:src="`/img/${imagePath}`", alt="Avatar")
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      default: "logo.png"
    }
  }
};
</script>

<style lang="sass">
.avatar
  width: 50px
  height: 50px
  img
    width: 100%
</style>

