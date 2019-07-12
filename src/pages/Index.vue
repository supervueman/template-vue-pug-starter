<template lang="pug">
  div.page
    main.main
      section.section.section--main
        .container
          h1.title.title-primary First screen title
          h2.title.title-secondary First screen subtitle
      section.section
        .container
          .container--wrapper
            a.card(v-for="i in 3" :key="i")
              .card--wrapper
                .card--inner
                  .card--media
                    img(:src="`${staticFolderBasePath}/${profile.avatar}`", alt="alt")
                  .card--header
                    h3.card--title {{profile.lastname}} {{profile.firstname}}
                    h4.card--subtitle Age: {{profile.age}}
                  .card--content
                    p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                .card--actions
                  .card--button Button
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
