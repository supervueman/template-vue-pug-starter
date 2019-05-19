<template lang="pug">
  div(id="app")
    toolbar(
      :firstname="profile.firstname"
      :avatarPath="profile.avatar"
    )
    router-view
    div {{profile}}
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      // profile: this.$store.getters["profile/getProfile"]
    };
  },
  computed: {
    profile() {
      return this.$store.getters["profile/getProfile"];
    }
  },
  beforeCreate() {
    this.$store.dispatch("profile/fetchProfile");
  }
};
</script>

<style lang="sass">

</style>
