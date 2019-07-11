<template lang="pug">
  div.page
    main.main
      section.section.section--main
      avatar(:imagePath="`${staticFolderBasePath}/${profile.avatar}`")
      h3 {{profile.lastname}} {{profile.firstname}}
      div Age: {{profile.age}}
      div.button BUTTON
</template>

<script>
import config from "@/config";
export default {
  data() {
    return {
      staticFolderBasePath: config.staticFolderBasePath
    };
  },
  computed: {
    profile() {
      return this.$store.getters["profile/getProfile"];
    }
  }
};
</script>
