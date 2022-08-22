<template lang="pug">
v-container(transition="slide-y-transition")
  v-content
    v-container
      nuxt
  slot(name="content")
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
