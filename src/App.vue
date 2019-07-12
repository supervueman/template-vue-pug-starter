<template lang="pug">
	#app
		toolbar
		router-view
		footer.footer
			.container
				.container--wrapper.grid--large-4
					.footer--item
						a.footer--link(href="/") Link 1
						a.footer--link(href="/") Link 2
					.footer--item
						a.footer--link(href="/") Link 1
						a.footer--link(href="/") Link 2
					.footer--item
						a.footer--link(href="/") Link 1
						a.footer--link(href="/") Link 2
					.footer--item
						a.footer--link(href="/") Link 1
						a.footer--link(href="/") Link 2
				.footer--item
					.footer--inner
						a.footer--logo(href="/")
							img(src="/static/img/logo.png", alt="alt")
						p.policy 2018-2019. All rights reserved.
							br
							a.policy--link.policy--link-active(href="") Privacy policy.
			.footer--bottom
				div.developer Created by 
					a.developer--link(href="http://multikey.studio" target="_blank") MULTIKEY.STUDIO
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
