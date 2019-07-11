<template lang="pug">
  header.toolbar
</template>

<script>
export default {
  props: {
    firstname: {
      type: String,
      default: "Vue"
    },
    avatarPath: {
      type: String,
      default: "logo.png"
    }
  }
};
</script>
