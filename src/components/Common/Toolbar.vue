<template lang="pug">
  header.toolbar
    .toolbar--menu
      a.toolbar--logo(href="/")
        img(src="/static/img/logo.png", alt="alt")
      a.toolbar--link(href="/" v-for="i in 3" :key="i") Link {{i}}
    a.toolbar--button Button
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
