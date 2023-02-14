<template lang="pug">
v-layout
  v-flex(text-xs-center)
    v-col(:key='i' v-for='(item, i) in items')
      v-btn(router :to='item.to' color='primary')
        v-icon(v-html='item.icon')
        span.mr-3
        | {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
        { icon: 'favoriteairplanemode_active', title: 'Marina', to: '/marina' },
        { icon: 'pets', title: 'Audote Pet', to: '/adoptpet' },
        { icon: 'favoriteairplanemode_active', title: 'componentereutilizavel', to: '/componentereutilizavel' },
        { icon: 'colorizeshield', title: 'Guilherme', to: '/guilherme' },
        { icon: 'baby_changing_station', title: 'Babe Care Spot', to: '/babycarespot' },
        { icon: 'api', title: 'Api Docs', to: '/apidocs' }
      ]
    }
  }
}
</script>
