<template lang="pug">
  div.page
    main.main
      section.section.section--full-screen
        .section--wrapper
          .container
            .section--content
              h1.title.title-primary First screen title
              h2.title.title-secondary First screen subtitle

      section.section
        .container
          .section--wrapper
            .section--header
              h2.section--title Section title
              h3.section--subtitle Section subtitle
            .section--content
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
            .section--actions
              a.section--button Button

      section.section
        .container
          .section--header
            h2.section--title Section title
            h3.section--subtitle Section subtitle
          .section--content
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi eligendi doloremque totam quas error tempore perspiciatis ipsam, dolore at ullam aliquam. Sapiente dignissimos, error iure ipsum modi eos voluptates?
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi eligendi doloremque totam quas error tempore perspiciatis ipsam, dolore at ullam aliquam. Sapiente dignissimos, error iure ipsum modi eos voluptates?

      section.section.section--full-screen
        .section--media.section--media_absolute
          video(src="/static/img/video.mp4" autoplay muted loop)
        .section--wrapper
          .container
            .section--content
              h1.title.title-primary Main screen title
              h2.title.title-secondary Main screen subtitle
      
      section.section
        .section--wrapper
          .container
            .section--inner
              .section--item.section--item-gap_right
                .section--content
                  h2.section--title {{profile.lastname}} {{profile.firstname}}
                  h3.section--subtitle Age: {{profile.age}}
                  p Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, totam sit ducimus in eos nemo mollitia! Accusamus ratione harum alias id incidunt. Nisi cumque mollitia voluptatibus repellat, architecto at dolorum!
              .section--item
                .section--media
                  img(src="/static/img/avatar.jpg", alt="alt")

      section.section
        .section--wrapper
          .container
            .section--inner
              .section--item
                .section--content
                  form.form
                    .form--wrapper
                      .form--header
                        h2.form--title Form title
                        h3.form--subtitle Form subtitle
                      .form--content
                        .form--group
                          .form--element
                            input.input(type="text" placeholder="Name:")
                          .form--element
                            input.input(type="text" placeholder="Phone:")
                        .form--group
                          .form--element
                            textarea.textarea(name="" placeholder="Message:")
                      .form--actions
                        button.form--button Button
              .section--item.section--item-gap_left
                .section--content
                  .section--wrapper
                    .section--header
                      h2.section--title Section title
                      h3.section--subtitle Section subtitle
                    a.section--link(href="/") Link 1
                    a.section--link(href="/") Link 1
                    a.section--link(href="/") Link 1
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
