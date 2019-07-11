<template lang="pug">
	div(id="app")
		toolbar(
			:firstname="profile.firstname"
			:avatarPath="`${staticFolderBasePath}/${profile.avatar}`"
		)
		router-view
</template>

<script>
import config from "@/config";
export default {
  name: "App",
  data() {
    return {
      staticFolderBasePath: config.staticFolderBasePath
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
#app
	width: 100%
</style>
