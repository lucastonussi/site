<template lang="pug">
main-content-transition
  template(name="content")
    v-content
      v-container
        nuxt
</template>

<script>
import MainContentTransition from "@/components/transitions/MainContent";

export default {
  components: {
    MainContentTransition
  },
  data() {
  }
}
</script>
