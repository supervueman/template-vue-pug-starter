<template lang="pug">
  header
    div {{firstname}}
    avatar(:imagePath="avatarPath")
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
